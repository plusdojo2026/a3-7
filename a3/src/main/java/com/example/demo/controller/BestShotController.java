package com.example.demo.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entity.Gallery;
import com.example.demo.entity.User;
import com.example.demo.repository.GalleriesRepository;
import com.example.demo.repository.UsersRepository;

import jakarta.servlet.http.HttpSession;

@RestController
public class BestShotController {
	
	@Autowired
	private UsersRepository usersRepository;
	
	@Autowired
	private GalleriesRepository galleriesRepository;
	
	private static final String UPLOAD_DIR = "uploads"; // アップロード先のディレクトリ
	
	@PostMapping("/api/bestshot")
	public void uploadImage(
		@RequestParam("image") MultipartFile image, HttpSession session
		) throws IOException {
		
		Integer id = (Integer) session.getAttribute("loginUserId"); //ログイン時に付与したIDを保持、getする
		System.out.print(id + "id");
		
		User user = usersRepository.findById(id)
				.orElseThrow();
		System.out.print(user + "user");
		
		//try {
            // アップロードディレクトリが存在しない場合、作成
            File uploadDir = new File(UPLOAD_DIR);
            if (!uploadDir.exists()) {
                uploadDir.mkdirs();
            }
            
            // 画像ファイルの保存先パス
            String filePath = UPLOAD_DIR + File.separator  + image.getOriginalFilename();
            System.out.println(uploadDir.getAbsolutePath());
            
            // 画像ファイルをディスクに保存
            Path destination = new File(filePath).toPath();
            Files.copy(image.getInputStream(), destination, StandardCopyOption.REPLACE_EXISTING);

		
			//画像保存処理(例)
			
			Gallery gallery = new Gallery();
			gallery.setUser(user);
			gallery.setImage(filePath);
			
			galleriesRepository.save(gallery);
		}
		

	@GetMapping("/api/count")
	public long counter (
			HttpSession session
			) {
		Integer id = (Integer) session.getAttribute("loginUserId");
		long result = galleriesRepository.count(id);     //登録件数の取得
	
	return result;
	}
	
	@GetMapping("/api/gallery")
	public List<Gallery> gallery (
			HttpSession session
			) {
		Integer id = (Integer) session.getAttribute("loginUserId");
		
		return galleriesRepository.findByUserId(id);
		
	}
	
	@DeleteMapping("/api/gallery/{id}")
	public void deleteImage(
			@PathVariable Integer id
			) throws IOException {
		
		Gallery gallery = galleriesRepository.findById(id)
				.orElseThrow();
		
		//サーバー内画像ファイル削除
		File file = new File(gallery.getImage());
		
		if (file.exists()) {
			file.delete();
		}
		
		//DBから削除
		galleriesRepository.delete(gallery);
	}
}
