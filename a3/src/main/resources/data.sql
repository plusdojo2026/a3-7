--アイコン情報
INSERT INTO icons (icon_name, icon_path) values ('ネコ','/a3/img/cat.png');
INSERT INTO icons (icon_name, icon_path) values ('恐竜','/a3/img/dinosaur.png');
INSERT INTO icons (icon_name, icon_path) values ('イルカ','/a3/img/dolphin.png');
INSERT INTO icons (icon_name, icon_path) values ('イヌ','/a3/img/dog.png');
INSERT INTO icons (icon_name, icon_path) values ('ゴリラ','/a3/img/gorilla.png');
INSERT INTO icons (icon_name, icon_path) values ('ウサギ', '/a3/img/rabbit.png');
INSERT INTO icons (icon_name, icon_path) values ('シロクマ','/a3/img/whiteBear.png');

-- ユーザ情報
INSERT INTO users (mail_address, password, nickname, icon_id) VALUES
('yamada@example.com', 'password123', 'やまだ', 1),
('tanaka@example.com', 'pass456', 'たなか', 1);


--自然ミッションの提案
INSERT INTO activities (suggest) values ('遠くの緑を見てみよう');
INSERT INTO activities (suggest) values ('花を探してみよう');
INSERT INTO activities (suggest) values ('太陽の光を浴びよう');
INSERT INTO activities (suggest) values ('月を探してみよう');
INSERT INTO activities (suggest) values ('夕暮れや夜空を見よう');
INSERT INTO activities (suggest) values ('自然の音を聴こう');
INSERT INTO activities (suggest) values ('風を感じよう');
INSERT INTO activities (suggest) values ('鳥や虫を探してみよう');
INSERT INTO activities (suggest) values ('街路樹の近くを歩いてみよう');


--一覧記録
INSERT INTO records (mission, progress, feel, found, date, user_id) values
('遠くの緑を見てみよう', 'プレゼンを頑張った', '嬉しい', '', '2026-07-16', 1);

--植物のカウント
INSERT INTO plants (user_id, count) values (1, 1);

--ミッションの保存
INSERT INTO keeps (user_id, date, suggest1_id, suggest2_id, suggest3_id,
suggest1_completed, suggest2_completed, suggest3_completed) values
(2, '2026-7-16', 2, 3, 4, true, true, true);
