// Ngan hang cau hoi XLMT trong CNTP - dap an theo chu in dam trong PDF
var QUESTIONS = [
  {
    "id": 1,
    "question": "Thông số đặc trưng cho tổng lượng chất hữu cơ trong nước thải là thông số nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "BOD"
      },
      {
        "key": "B",
        "text": "COD"
      },
      {
        "key": "C",
        "text": "TSS"
      },
      {
        "key": "D",
        "text": "TFS"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 2,
    "question": "Thông số đặc trưng cho lượng chất hữu cơ dễ phân hủy sinh học là thông số nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "COD"
      },
      {
        "key": "B",
        "text": "TP"
      },
      {
        "key": "C",
        "text": "BOD5"
      },
      {
        "key": "D",
        "text": "TN"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 3,
    "question": "Thông số đặc trưng cho tổng lượng cặn lơ lửng trong nước là thông số nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "TP"
      },
      {
        "key": "B",
        "text": "TS"
      },
      {
        "key": "C",
        "text": "TDS"
      },
      {
        "key": "D",
        "text": "TSS"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 4,
    "question": "Nguồn nước có tỷ số BOD5/COD = 0.65, có thể kết luận gì cho nguồn nước này?",
    "options": [
      {
        "key": "A",
        "text": "Nguồn nước có ít chất hữu cơ dễ phân hủy sinh học"
      },
      {
        "key": "B",
        "text": "Nguồn nước có nhiều chất hữu cơ"
      },
      {
        "key": "C",
        "text": "Chất hữu cơ dễ phân hủy sinh học chiếm đa số trong nguồn nước này"
      },
      {
        "key": "D",
        "text": "Nguồn nước có nhiều chất hữu cơ khó phân hủy sinh học"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 5,
    "question": "Nguồn nước có tỷ số BOD5/COD=0.26, có thể kết luận gì về nguồn nước này?",
    "options": [
      {
        "key": "A",
        "text": "Nguồn nước chứa ít chất hữu cơ khó phân hủy sinh học"
      },
      {
        "key": "B",
        "text": "Các chất hữu cơ khó phân hủy sinh học chiếm đa số trong nguồn nước này."
      },
      {
        "key": "C",
        "text": "Nguồn nước chứa nhiều kim loại nặng"
      },
      {
        "key": "D",
        "text": "Nguồn nước chứa nhiều chất ức chế vi sinh vật."
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 6,
    "question": "Số 5 trong tên thông số BOD5 được hiểu là gì?",
    "options": [
      {
        "key": "A",
        "text": "5 giờ, đây là khoảng thời gian ngắn nhất khi phân tích BOD5"
      },
      {
        "key": "B",
        "text": "5 ngày, đây là khoảng thời gian cho vi sinh vật hô hấp, phân giải chất hữu cơ dễ phân hủy sinh học."
      },
      {
        "key": "C",
        "text": "5ml, đây là thể tích mẫu cần sử dụng khi phân tích BOD5"
      },
      {
        "key": "D",
        "text": "5oC, đây là nhiệt độ ủ của phân tích BOD5"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 7,
    "question": "Khi chất dinh dưỡng (N,P) trong nước thải thủy sản đổ ra nguồn tiếp nhận mà không qua xử lý. Hiện tượng nào có thể diễn ra sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Hiện tượng phú dưỡng hóa nguồn nước."
      },
      {
        "key": "B",
        "text": "Hiện tượng nổi bọt khí"
      },
      {
        "key": "C",
        "text": "Bùn đáy biến thành màu đen"
      },
      {
        "key": "D",
        "text": "Không có hiện tượng gì rõ rệt vì đó là nguồn dinh dưỡng cho thực vật."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 8,
    "question": "Nitơ trong nước thải chăn nuôi gia súc thường ở dạng nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Nitrat"
      },
      {
        "key": "B",
        "text": "Nitrit"
      },
      {
        "key": "C",
        "text": "Amonia"
      },
      {
        "key": "D",
        "text": "Amonium clorua"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 9,
    "question": "Trong nguồn nước thải chăn nuôi, những chất ô nhiễm nào được coi là nguy hại cho con người và động vật?",
    "options": [
      {
        "key": "A",
        "text": "Hàm lượng chất hữu cơ"
      },
      {
        "key": "B",
        "text": "Vi sinh vật gây bệnh"
      },
      {
        "key": "C",
        "text": "Ruồi muỗi"
      },
      {
        "key": "D",
        "text": "Phát tán mùi, khí độc"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 10,
    "question": "Những thông số ô nhiễm nào là đặc trưng của nước thải chăn nuôi?",
    "options": [
      {
        "key": "A",
        "text": "Chất hữu cơ, N, P, cặn, vi sinh vật gây bệnh"
      },
      {
        "key": "B",
        "text": "Chất hữu cơ, TS, vi sinh vật gây bệnh, kim loại nặng"
      },
      {
        "key": "C",
        "text": "Chất hữu cơ, N, cặn, vi sinh vật gây bệnh, TDS"
      },
      {
        "key": "D",
        "text": "Chất hữu cơ, N, P, TDS, vi sinh vật gây bệnh, hơi khí độc"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 11,
    "question": "Một đặc trưng của nước thải chế biến hải sản đánh bắt xa bờ?",
    "options": [
      {
        "key": "A",
        "text": "Nhiệt độ nước thải thấp"
      },
      {
        "key": "B",
        "text": "Hàm lượng chất bảo quản cao"
      },
      {
        "key": "C",
        "text": "Hàm lượng muối trong nước thải cao"
      },
      {
        "key": "D",
        "text": "Hàm lượng cặn rác lớn"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 12,
    "question": "Theo QCVN 40:2011/BTNMT, nguồn tiếp nhận nước thải là nguồn nào?",
    "options": [
      {
        "key": "A",
        "text": "Xả trực tiếp vào đất"
      },
      {
        "key": "B",
        "text": "Đường cống thu gom về trạm xử lý tập trung"
      },
      {
        "key": "C",
        "text": "Tuần hoàn tái sử dụng"
      },
      {
        "key": "D",
        "text": "Nước sông, suối, ao, hồ"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 13,
    "question": "Theo QCVN 40:2011/BTNMT, nguồn tiếp nhận được xác định là nguồn nào?",
    "options": [
      {
        "key": "A",
        "text": "Nguồn nước phục vụ ăn uống sinh hoạt và nguồn nước phục vụ thủy lợi"
      },
      {
        "key": "B",
        "text": "Nguồn nước sông lớn và sông nhỏ tùy thuộc lưu lượng sông"
      },
      {
        "key": "C",
        "text": "Nguồn nước sinh hoạt và nguồn nước công nghiệp"
      },
      {
        "key": "D",
        "text": "Nước sông suối, ao hồ, nước biển"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 14,
    "question": "Công thức xác định giá trị cho phép tối đa của các chỉ tiêu ô nhiễm là gì?",
    "options": [
      {
        "key": "A",
        "text": "Cmax=C.a.b"
      },
      {
        "key": "B",
        "text": "Cmax=C.Kq.Kf"
      },
      {
        "key": "C",
        "text": "Không có công thức tính"
      },
      {
        "key": "D",
        "text": "Dựa theo bảng tra trong quy chuẩn"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 15,
    "question": "Theo QCVN 40:2011/BTNMT, các thông số nào sau đây có Cmax=C",
    "options": [
      {
        "key": "A",
        "text": "COD, nhiệt độ, độ màu"
      },
      {
        "key": "B",
        "text": "Nhiệt độ, độ màu, pH"
      },
      {
        "key": "C",
        "text": "TS, pH, độ màu"
      },
      {
        "key": "D",
        "text": "TSS, coliform, pH"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 16,
    "question": "Nước thải chế biến Thủy sản có thông số nào đặc trưng sau đây?",
    "options": [
      {
        "key": "A",
        "text": "SS"
      },
      {
        "key": "B",
        "text": "độ màu"
      },
      {
        "key": "C",
        "text": "Nitơ tổng"
      },
      {
        "key": "D",
        "text": "hàm lượng muối"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 17,
    "question": "Trong kết quả phân tích dưới đây, thông số “tổng rắn hòa tan” được viết tắt là gì?",
    "options": [
      {
        "key": "A",
        "text": "TDS"
      },
      {
        "key": "B",
        "text": "TSS"
      },
      {
        "key": "C",
        "text": "TS"
      },
      {
        "key": "D",
        "text": "TFS"
      }
    ],
    "answer": "A",
    "images": [
      "images/q17_2.png"
    ]
  },
  {
    "id": 18,
    "question": "Trong bảng kết quả phân tích dưới đây, thông số nào trong mẫu 0613548 tương đương 0 mg/l?",
    "options": [
      {
        "key": "A",
        "text": "Nitrat"
      },
      {
        "key": "B",
        "text": "Sunfua"
      },
      {
        "key": "C",
        "text": "Không có thông số nào"
      },
      {
        "key": "D",
        "text": "Cả sunfua và nitrat"
      }
    ],
    "answer": "B",
    "images": [
      "images/q18_1.png"
    ]
  },
  {
    "id": 19,
    "question": "Trong mẫu phân tích dưới đây, kết quả phân tích ghi “ND” nghĩa là gì?",
    "options": [
      {
        "key": "A",
        "text": "Không phân tích"
      },
      {
        "key": "B",
        "text": "Nồng độ cao vượt ngưỡng"
      },
      {
        "key": "C",
        "text": "Không đúng phương pháp đo"
      },
      {
        "key": "D",
        "text": "Không phát hiện"
      }
    ],
    "answer": "D",
    "images": [
      "images/q19_1.png"
    ]
  },
  {
    "id": 20,
    "question": "Trong bảng kết quả phân tích dưới đây, cột phương pháp có ý nghĩa gì?",
    "options": [
      {
        "key": "A",
        "text": "Đây là tiêu chuẩn mà kết quả đo phải so sánh xem có được thải ra nguồn tiếp nhận hay không."
      },
      {
        "key": "B",
        "text": "Do có nhiều phương pháp đo đạc cho từng chỉ tiêu, nên cần ghi rõ phương pháp để tiện so sánh kết quả cũng như sử dụng kết quả."
      },
      {
        "key": "C",
        "text": "Đây là phương pháp lưu trữ mẫu"
      },
      {
        "key": "D",
        "text": "Đây là phương pháp do Việt Nam quy định bắt buộc phải sử dụng"
      }
    ],
    "answer": "B",
    "images": [
      "images/q19_1.png"
    ]
  },
  {
    "id": 21,
    "question": "Quan sát bảng kết quả phân tích sau, mẫu nào là mẫu trước xử lý?",
    "options": [
      {
        "key": "A",
        "text": "Mẫu 0613549"
      },
      {
        "key": "B",
        "text": "2 mẫu này không có liên quan"
      },
      {
        "key": "C",
        "text": "Không thể xác định được"
      },
      {
        "key": "D",
        "text": "Mẫu 0613548"
      }
    ],
    "answer": "D",
    "images": [
      "images/q21_1.png"
    ]
  },
  {
    "id": 22,
    "question": "Nước thải từ nhà máy chế biến thịt khi không được xử lý nitơ có thể tác động đến môi trường như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Tạo hiện tượng phú dưỡng hóa"
      },
      {
        "key": "B",
        "text": "Tạo cặn lắng"
      },
      {
        "key": "C",
        "text": "Tạo váng nổi"
      },
      {
        "key": "D",
        "text": "Tạo màu và đục cho nguồn nước"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 23,
    "question": "Nước thải từ nhà máy chế biến tinh bột thô từ củ khoai mì tươi có thể tạo ra loại chất độc nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "THM"
      },
      {
        "key": "B",
        "text": "Cyanua"
      },
      {
        "key": "C",
        "text": "Kim loại nặng"
      },
      {
        "key": "D",
        "text": "Phốt phát"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 24,
    "question": "Nước thải từ nhà máy chế biến tinh bột thô từ củ khoai mì tươi có thể tạo ra chất ô nhiễm nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Kim loại nặng"
      },
      {
        "key": "B",
        "text": "Dầu mỡ"
      },
      {
        "key": "C",
        "text": "TN"
      },
      {
        "key": "D",
        "text": "Vi sinh vật gây bệnh"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 25,
    "question": "Nước thải từ quá trình lên men của nhà máy sản xuất mì chính thường có đặc trưng gì?",
    "options": [
      {
        "key": "A",
        "text": "Hàm lượng muối cao"
      },
      {
        "key": "B",
        "text": "Chất hữu cơ rất cao"
      },
      {
        "key": "C",
        "text": "Độ màu rất cao"
      },
      {
        "key": "D",
        "text": "Cả độ màu và chất hữu cơ cao"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 26,
    "question": "Dấu hiệu đặc trưng của nguồn nước ô nhiễm là gì?",
    "options": [
      {
        "key": "A",
        "text": "Có mùi hôi"
      },
      {
        "key": "B",
        "text": "Đặc tính hóa học, sinh học thay đổi theo hướng tiêu cực với sự sống"
      },
      {
        "key": "C",
        "text": "Tất cả đều đúng"
      },
      {
        "key": "D",
        "text": "Xuất hiện váng nổi, cặn lắng"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 27,
    "question": "Trong nhà máy chế biến thực phẩm, khí thải thường bắt nguồn từ khu vực nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Nhà vệ sinh"
      },
      {
        "key": "B",
        "text": "Khu vực tiếp nhận nguyên liệu"
      },
      {
        "key": "C",
        "text": "Khu vực xử lý nước thải"
      },
      {
        "key": "D",
        "text": "Ống khói lò hơi"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 28,
    "question": "Nhiên liệu sử dụng để đốt lò hơi thường là các loại nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Dầu FO, dầu DO"
      },
      {
        "key": "B",
        "text": "Than đá, củi"
      },
      {
        "key": "C",
        "text": "Khí đốt, điện"
      },
      {
        "key": "D",
        "text": "Tất cả đáp án đều đúng"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 29,
    "question": "Khí thải từ quá trình đốt lò hơi thường là các chất nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "SO2, NOx, CO, CO2, dioxin"
      },
      {
        "key": "B",
        "text": "SO2, NOx, CO, CO2, THM"
      },
      {
        "key": "C",
        "text": "SO2, NOx, CO, CO2, Benzen"
      },
      {
        "key": "D",
        "text": "Tất cả đáp án đều đúng"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 30,
    "question": "Nguyên tắc 3T để kiểm soát quá trình đốt nhiên liệu là gì?",
    "options": [
      {
        "key": "A",
        "text": "Nhiệt độ, loại nhiên liệu, kích thước vật liệu"
      },
      {
        "key": "B",
        "text": "Nhiệt độ, độ xáo trộn, thời gian"
      },
      {
        "key": "C",
        "text": "Thời gian, độ xáo trộn, độ đồng đều"
      },
      {
        "key": "D",
        "text": "Không có đáp án đúng"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 31,
    "question": "Một số chất độc có thể phát sinh từ quá trình đốt là gì?",
    "options": [
      {
        "key": "A",
        "text": "CO, CO2, clo hữu cơ"
      },
      {
        "key": "B",
        "text": "Kim loại nặng, HBr, HCl, HF"
      },
      {
        "key": "C",
        "text": "Phóng xạ, CO, NOx, Furan"
      },
      {
        "key": "D",
        "text": "CO, dioxin, kim loại nặng"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 32,
    "question": "Lò hơi đốt củi rất ít phát sinh ra chất ô nhiễm nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Khói"
      },
      {
        "key": "B",
        "text": "Tro bụi"
      },
      {
        "key": "C",
        "text": "NOx"
      },
      {
        "key": "D",
        "text": "CO2"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 33,
    "question": "Lò hơi đốt than thường tạo ra chất ô nhiễm nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "CO2, SO, hơi dầu"
      },
      {
        "key": "B",
        "text": "SO2, SO3, SO, NO, NO2, HF"
      },
      {
        "key": "C",
        "text": "CO, SO2, NO"
      },
      {
        "key": "D",
        "text": "Tất cả đều đúng"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 34,
    "question": "ô nhiễm không khí từ quá trình đốt có thể tác động đến môi trường như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Gây biến đổi khí hậu"
      },
      {
        "key": "B",
        "text": "Tạo mưa axit"
      },
      {
        "key": "C",
        "text": "Gây hiệu ứng nhà kính"
      },
      {
        "key": "D",
        "text": "Tất cả đều đúng"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 35,
    "question": "Phát biểu nào sau đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "Hiệu ứng nhà kính không phải do sự ô nhiễm không khí, nó đã tồn tại từ lâu"
      },
      {
        "key": "B",
        "text": "Hiệu ứng nhà kính là do quá trình phát thải ô nhiễm không khí"
      },
      {
        "key": "C",
        "text": "Hiệu ứng nhà kính có thể gây thủng tầng ozon"
      },
      {
        "key": "D",
        "text": "Hiệu ứng nhà kính do các chất khí từ quá trình đốt và quá trình biến đổi khí hậu"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 36,
    "question": "Phát biểu nào sau đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "Biến đổi khí hậu dẫn đến hiệu ứng nhà kính"
      },
      {
        "key": "B",
        "text": "Hiệu ứng nhà kính và biến đổi khí hậu không có liên quan"
      },
      {
        "key": "C",
        "text": "Hiệu ứng nhà kính là hiện tượng thời tiết tiêu cực, nên hạn chế tối đa."
      },
      {
        "key": "D",
        "text": "Hiệu ứng nhà kính dẫn đén biến đổi khí hậu"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 37,
    "question": "Ô nhiễm không khí có thể ảnh hưởng đến bộ phận nào trong cơ thể?",
    "options": [
      {
        "key": "A",
        "text": "Hệ hô hấp, hệ bài tiết"
      },
      {
        "key": "B",
        "text": "Da, hệ hô hấp, hệ thần kinh"
      },
      {
        "key": "C",
        "text": "Các giác quan, hệ hô hấp"
      },
      {
        "key": "D",
        "text": "Tất cả đều đúng"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 38,
    "question": "CO gây ngạt thở như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "CO kết hợp với Hemoglobin làm máu không thể vận chuyển O2 đến tế bào"
      },
      {
        "key": "B",
        "text": "Nồng độ CO cao chiếm chỗ O2 trong không khí"
      },
      {
        "key": "C",
        "text": "CO ảnh hưởng đến tim, làm giảm quá trình bơm máu đẩy O2 đến tế bào"
      },
      {
        "key": "D",
        "text": "Tất cả đều đúng"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 39,
    "question": "Oxít nitơ có thể gây ảnh hưởng đến sức khỏe con người như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Gây ung thư"
      },
      {
        "key": "B",
        "text": "Tăng huyết áp, ảnh hưởng đến tim"
      },
      {
        "key": "C",
        "text": "Gây viêm và kích ứng đường thở"
      },
      {
        "key": "D",
        "text": "Tất cả đều đúng"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 40,
    "question": "Oxit lưu huỳnh trong không khí có thể ảnh hưởng đến sức khỏe con người như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Gây mưa axit"
      },
      {
        "key": "B",
        "text": "Gây khó thở"
      },
      {
        "key": "C",
        "text": "Gây khói mù quang hóa"
      },
      {
        "key": "D",
        "text": "Gây ung thư"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 41,
    "question": "Phát biểu nào sau đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "Hạt bụi có kích thước lớn ảnh hưởng mạnh đến sức khỏe"
      },
      {
        "key": "B",
        "text": "Hầu hết các hạt bụi đều bị giữ lại trong phổi"
      },
      {
        "key": "C",
        "text": "Hạt bụi có kích thước càng nhỏ thì càng nguy hiểm đến sức khỏe"
      },
      {
        "key": "D",
        "text": "Hạt bụi không thể bị hòa tan và giữ lại trong hệ hô hấp"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 42,
    "question": "Bụi trong không khí có thể ảnh hưởng đến sức khỏe như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Tất cả đều đúng"
      },
      {
        "key": "B",
        "text": "Gây hại cho phổi, mắt, da"
      },
      {
        "key": "C",
        "text": "Làm giảm chức năng phổi"
      },
      {
        "key": "D",
        "text": "Gây bệnh tim, mất trí nhớ"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 43,
    "question": "Trong các quy chuẩn về khí thải, đơn vị đo nồng độ thường là mg/Nm3, hãy giải thích đơn vị đo này?",
    "options": [
      {
        "key": "A",
        "text": "mg chất ô nhiễm trên một mét khối không khí tự nhiên"
      },
      {
        "key": "B",
        "text": "mg chất ô nhiễm trên một mét khối khí quy về điều kiện chuẩn"
      },
      {
        "key": "C",
        "text": "mg chất ô nhiễm trên một mét khối khí tính theo nitơ"
      },
      {
        "key": "D",
        "text": "Tất cả các đáp án đều sai"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 44,
    "question": "Điều kiện chuẩn của không khí trong các tiêu chuẩn về ô nhiễm không khí được định nghĩa là gì?",
    "options": [
      {
        "key": "A",
        "text": "00C, 1 atm"
      },
      {
        "key": "B",
        "text": "250C, 1atm"
      },
      {
        "key": "C",
        "text": "00K, 1 atm"
      },
      {
        "key": "D",
        "text": "Tất cả đều sai"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 45,
    "question": "Sự cố ô nhiễm sương khói ở London xảy ra do sự tích tụ nồng độ cao của khí nào trong lớp sương khói gần mặt đất?",
    "options": [
      {
        "key": "A",
        "text": "NO"
      },
      {
        "key": "B",
        "text": "CO"
      },
      {
        "key": "C",
        "text": "SO2"
      },
      {
        "key": "D",
        "text": "VOCs"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 46,
    "question": "Xung đột môi trường đã xảy ra năm 2008 về vấn đề xả nước thải ô nhiễm môi trường và chết thủy hải sản giữa cộng đồng dân cư ven sông Thị Vải và doanh nghiệp nào?",
    "options": [
      {
        "key": "A",
        "text": "Massan"
      },
      {
        "key": "B",
        "text": "Vedan"
      },
      {
        "key": "C",
        "text": "Chisso"
      },
      {
        "key": "D",
        "text": "Ajinomoto"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 47,
    "question": "Phát biểu nào sau đây là không đúng về sự có mặt của khí CO2 trong môi trường?",
    "options": [
      {
        "key": "A",
        "text": "Được sinh ra từ việc đốt nhiên liệu hóa thạch của con người"
      },
      {
        "key": "B",
        "text": "Là sản phẩm của quá trình phân hủy yếm khí chất hữu cơ"
      },
      {
        "key": "C",
        "text": "Phát sinh chủ yếu từ hoạt động sinh hoạt"
      },
      {
        "key": "D",
        "text": "Có nguồn gốc tự nhiên và từ hoạt động nhân tạo"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 48,
    "question": "Không khí khô và sạch là khi không có sự hiện diện của các thành phần nào?",
    "options": [
      {
        "key": "A",
        "text": "Các loại chất lỏng khác nhau"
      },
      {
        "key": "B",
        "text": "Các hạt bụi có kích thước nhỏ"
      },
      {
        "key": "C",
        "text": "Các hạt bụi kích thước lớn, nhỏ"
      },
      {
        "key": "D",
        "text": "Các hạt chất rắn, hơi nước, chất lỏng"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 49,
    "question": "Phát biểu nào đúng về khí thải SO2 trong khí quyển?",
    "options": [
      {
        "key": "A",
        "text": "Chỉ phát sinh từ nguồn gốc nhân tạo"
      },
      {
        "key": "B",
        "text": "Chủ yếu gây ra hiện tượng ấm lên toàn cầu"
      },
      {
        "key": "C",
        "text": "Gây ra hiện tượng mưa axit"
      },
      {
        "key": "D",
        "text": "Phát sinh chủ yếu từ hoạt động sinh hoạt của con người"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 50,
    "question": "Vi khuẩn E.coli dùng để chỉ thị vấn đề nào?",
    "options": [
      {
        "key": "A",
        "text": "Không khí bị ô nhiễm bởi SO2"
      },
      {
        "key": "B",
        "text": "Nguồn nước bị nhiễm phân"
      },
      {
        "key": "C",
        "text": "Đất bị nhiễm phèn"
      },
      {
        "key": "D",
        "text": "Không khí bị ô nhiễm bởi CO2"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 51,
    "question": "Quá trình nào phát sinh lượng lớn CO2 trong việc sản xuất điện từ nhiên liệu hóa thạch?",
    "options": [
      {
        "key": "A",
        "text": "Làm sạch nhiên liệu"
      },
      {
        "key": "B",
        "text": "Vận hành quá trình"
      },
      {
        "key": "C",
        "text": "Tạm ngưng động cơ"
      },
      {
        "key": "D",
        "text": "Đốt cháy nhiên liệu"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 52,
    "question": "Nhiên liệu nào sau đây chứa lượng lưu huỳnh lớn nhất?",
    "options": [
      {
        "key": "A",
        "text": "Dầu FO"
      },
      {
        "key": "B",
        "text": "Củi đốt"
      },
      {
        "key": "C",
        "text": "Than đá"
      },
      {
        "key": "D",
        "text": "Biogas"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 53,
    "question": "Nhiên liệu nào sau đây khi đốt cháy sinh ra lượng CO2 lớn nhất?",
    "options": [
      {
        "key": "A",
        "text": "Than củi"
      },
      {
        "key": "B",
        "text": "Khí sinh học"
      },
      {
        "key": "C",
        "text": "Dầu sinh học"
      },
      {
        "key": "D",
        "text": "Dầu DO"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 54,
    "question": "Mưa acid là gì?",
    "options": [
      {
        "key": "A",
        "text": "Trong nước mưa có chứa acid"
      },
      {
        "key": "B",
        "text": "Sự gột rửa bầu khí quyển có chứa acid"
      },
      {
        "key": "C",
        "text": "Sự lắng đọng của các chất có tính acid trong bầu khí quyển"
      },
      {
        "key": "D",
        "text": "Các trận mưa có pH <5,6"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 55,
    "question": "Khí nhà kính bao gồm những khí nào?",
    "options": [
      {
        "key": "A",
        "text": "CO2, CFC, H2O, CH4"
      },
      {
        "key": "B",
        "text": "CO2"
      },
      {
        "key": "C",
        "text": "CO2, H2O"
      },
      {
        "key": "D",
        "text": "Tất cả các loại khí trên, trừ H2O"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 56,
    "question": "Hệ quả tức thời của hiệu ứng nhà kính là gì?",
    "options": [
      {
        "key": "A",
        "text": "Băng ở hai cực tan ra"
      },
      {
        "key": "B",
        "text": "Trái đất nóng lên"
      },
      {
        "key": "C",
        "text": "Mực nước biển dâng lên"
      },
      {
        "key": "D",
        "text": "Biến đổi khí hậu toàn cầu"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 57,
    "question": "Nguồn phát thải khí nhà kính lớn nhất hiện nay?",
    "options": [
      {
        "key": "A",
        "text": "Quy trình công nghiệp và sử dụng sản phẩm"
      },
      {
        "key": "B",
        "text": "Năng lượng (phát thải do đốt cháy nhiên liệu hóa thạch…)"
      },
      {
        "key": "C",
        "text": "Nông nghiệp, lâm nghiệp và sử dụng đất"
      },
      {
        "key": "D",
        "text": "Chất thải (chôn lấp chất thải rắn; xử lý sinh học chất thải rắn…)"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 58,
    "question": "Khí nào được dùng làm tham chiếu để so sánh cho các loại khí nhà kính khác đánh giá tiềm năng nóng lên toàn cầu?",
    "options": [
      {
        "key": "A",
        "text": "NO2"
      },
      {
        "key": "B",
        "text": "O3"
      },
      {
        "key": "C",
        "text": "CH4"
      },
      {
        "key": "D",
        "text": "CO2"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 59,
    "question": "Các acid nào chủ yếu gây nên mưa acid?",
    "options": [
      {
        "key": "A",
        "text": "HCl, HNO3"
      },
      {
        "key": "B",
        "text": "H2SO4, HNO3"
      },
      {
        "key": "C",
        "text": "H3PO4, HF"
      },
      {
        "key": "D",
        "text": "H2SO4, HNO3, HCl, H3PO4"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 60,
    "question": "Loại khí nào sau đây không phải là khí nhà kính?",
    "options": [
      {
        "key": "A",
        "text": "CH4"
      },
      {
        "key": "B",
        "text": "O2"
      },
      {
        "key": "C",
        "text": "NO2"
      },
      {
        "key": "D",
        "text": "HFC"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 61,
    "question": "Tác hại của mưa acid không bao gồm?",
    "options": [
      {
        "key": "A",
        "text": "Làm tổn hại sức khỏe con người"
      },
      {
        "key": "B",
        "text": "Làm tăng pH của thủy vực"
      },
      {
        "key": "C",
        "text": "Gây ăn mòn công trình kiến trúc"
      },
      {
        "key": "D",
        "text": "Gây tác động đến quang hợp của thực vật"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 62,
    "question": "Sự suy giảm tầng ozone sẽ gây nên hậu quả gì?",
    "options": [
      {
        "key": "A",
        "text": "Giảm hiệu ứng nhà kính"
      },
      {
        "key": "B",
        "text": "Tăng hiệu ứng nhà kính"
      },
      {
        "key": "C",
        "text": "Không ảnh hưởng đến hiệu ứng nhà kính"
      },
      {
        "key": "D",
        "text": "Giảm bức xạ tia cực tím chiếu xuống mặt đất"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 63,
    "question": "Khi nồng độ các khí nhà kính càng cao thì gây nên hậu quả gì?",
    "options": [
      {
        "key": "A",
        "text": "Nhiệt độ không khí càng tăng"
      },
      {
        "key": "B",
        "text": "Nhiệt độ không khí càng giảm"
      },
      {
        "key": "C",
        "text": "Nhiệt độ không khí càng cao và gây biến đổi khí hậu toàn cầu"
      },
      {
        "key": "D",
        "text": "Không ảnh hưởng đến nhiệt độ không khí"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 64,
    "question": "Tại sao mưa acid làm cây trồng không phát triển được?",
    "options": [
      {
        "key": "A",
        "text": "Hủy hoại thân, lá cây."
      },
      {
        "key": "B",
        "text": "Thấm vào đất làm đất chai cứng"
      },
      {
        "key": "C",
        "text": "Cản trở quá trình quang hợp, tan chất dinh dưỡng trong đất, ngăn cản quá trình cố định đạm của vi sinh vật"
      },
      {
        "key": "D",
        "text": "Cản trở quá trình quang hợp, cây không hấp thu được ánh sáng mặt trời"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 65,
    "question": "Bụi hô hấp là bụi có thể xâm nhập vào phổi gây nguy hại tới sức khỏe của con người, bụi hô hấp có kích thước là bao nhiêu µm?",
    "options": [
      {
        "key": "A",
        "text": " 15"
      },
      {
        "key": "B",
        "text": " 10"
      },
      {
        "key": "C",
        "text": " 20"
      },
      {
        "key": "D",
        "text": " 25"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 66,
    "question": "Điền vào chỗ trống: “…..” là một chất khí không màu, có mùi hăng cay, là khí thải phát sinh từ quá trình đốt nhiên liệu, từ ngành công nghiệp lọc hóa dầu, sản xuất hóa chất, có khả năng hòa tan trong nước cao.",
    "options": [
      {
        "key": "A",
        "text": "CO"
      },
      {
        "key": "B",
        "text": "NO"
      },
      {
        "key": "C",
        "text": "SO2"
      },
      {
        "key": "D",
        "text": "CO2"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 67,
    "question": "Điền vào chỗ trống: “…..” là một khí độc, không màu, sinh ra từ cống rãnh, núi lửa, xác chết động thực vật, trong công nghiệp, nếu ở nồng độ 700 - 900 ppm có thể gây tử vong cho con người.",
    "options": [
      {
        "key": "A",
        "text": "CO"
      },
      {
        "key": "B",
        "text": "SO2"
      },
      {
        "key": "C",
        "text": "H2S"
      },
      {
        "key": "D",
        "text": "CO2"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 68,
    "question": "Điền vào chỗ trống: “…..” là một khí độc, không màu, sinh ra do đốt nhiên liệu trong điều kiện thiếu O2 , nếu xâm nhập vào cơ thể con người có thể gây tác hại nghiêm trọng dẫn đến tử vong.",
    "options": [
      {
        "key": "A",
        "text": "H2S"
      },
      {
        "key": "B",
        "text": "CO"
      },
      {
        "key": "C",
        "text": "SO2"
      },
      {
        "key": "D",
        "text": "CO2"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 69,
    "question": "Điền vào chỗ trống: “…..” là khí màu nâu nhạt, dễ hấp thụ bức xạ tử ngoại, dễ hòa tan trong nước, tham gia phản ứng quang hóa, là một trong những nguyên nhân gây ra hiện tượng mưa acid.",
    "options": [
      {
        "key": "A",
        "text": "CO"
      },
      {
        "key": "B",
        "text": "H2S"
      },
      {
        "key": "C",
        "text": "NO2"
      },
      {
        "key": "D",
        "text": "SO2"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 70,
    "question": "Điền vào chỗ trống: “…..” là khí không màu, không mùi, sinh ra do năng lượng sấm sét, gây bệnh thiếu máu do tác dụng với hồng cầu giảm khả năng vận chuyển oxi.",
    "options": [
      {
        "key": "A",
        "text": "CO2"
      },
      {
        "key": "B",
        "text": "NO"
      },
      {
        "key": "C",
        "text": "H2S"
      },
      {
        "key": "D",
        "text": "SO2"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 71,
    "question": "Ô nhiễm nguồn nước là sự thay đổi thành phần và tính chất của nước gây tác động như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Gây ảnh hưởng xấu tới con người và sinh vật"
      },
      {
        "key": "B",
        "text": "Gây ảnh hưởng xấu tới sinh vật trong nước"
      },
      {
        "key": "C",
        "text": "Gây phú dưỡng hóa nguồn nước"
      },
      {
        "key": "D",
        "text": "Gây ra hiện tượng thủy triều đỏ"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 72,
    "question": "Ô nhiễm nguồn nước là khi thành phần và tính chất của nước thay đổi như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Không phù hợp với tiêu chuẩn, quy chuẩn kỹ thuật cho phép"
      },
      {
        "key": "B",
        "text": "Gây hại cho môi trường"
      },
      {
        "key": "C",
        "text": "Cao hơn tiêu chuẩn, quy chuẩn kỹ thuật cho phép"
      },
      {
        "key": "D",
        "text": "Gây phú dưỡng hóa nguồn nước"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 73,
    "question": "Ô nhiễm nguồn nước là khi tính chất nào của nước bị biến đổi?",
    "options": [
      {
        "key": "A",
        "text": "Màu, mùi, vị"
      },
      {
        "key": "B",
        "text": "Vật lý, hóa học, sinh học"
      },
      {
        "key": "C",
        "text": "Axit, kiềm, độ cứng"
      },
      {
        "key": "D",
        "text": "Nhu cầu oxy hóa học, sinh học"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 74,
    "question": "Một nguồn nước được xác định ô nhiễm hay không phụ thuộc vào yếu tố nào?",
    "options": [
      {
        "key": "A",
        "text": "Cảm quan người sử dụng"
      },
      {
        "key": "B",
        "text": "Lưu lượng sử dụng"
      },
      {
        "key": "C",
        "text": "Mục đích sử dụng"
      },
      {
        "key": "D",
        "text": "Tính chất nguồn nước"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 75,
    "question": "Nguồn nước bị ô nhiễm khi có sự hiện diện của tác nhân nào?",
    "options": [
      {
        "key": "A",
        "text": "Các chất hữu cơ, chất dinh dưỡng, chất vô cơ hòa tan, thuốc bảo vệ thực vật, kim loại nặng, dầu mỡ, chất phóng xạ, vi sinh vật"
      },
      {
        "key": "B",
        "text": "Tất cả các chất, trừ chất dinh dưỡng, trừ chất hữu cơ"
      },
      {
        "key": "C",
        "text": "Các chất hữu cơ, chất dinh dưỡng, chất vô cơ không tan, thuốc bảo vệ thực vật, kim loại nặng, dầu mỡ, chất phóng xạ, vi sinh vật"
      },
      {
        "key": "D",
        "text": "Tất cả các chất, trừ chất dinh dưỡng"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 76,
    "question": "Nguồn nước bị ô nhiễm sinh học khi có sự hiện diện của các tác nhân nào?",
    "options": [
      {
        "key": "A",
        "text": "Vi khuẩn gây bệnh, virut, các kí sinh trùng và sinh vật gây trở ngại"
      },
      {
        "key": "B",
        "text": "Vi khuẩn gây bệnh"
      },
      {
        "key": "C",
        "text": "Virut (siêu vi khuẩn), vi khuẩn gây bệnh"
      },
      {
        "key": "D",
        "text": "Các kí sinh trùng và sinh vật gây trở ngại"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 77,
    "question": "Các nguồn phát sinh nước thải chủ yếu từ những hoạt động nào của con người?",
    "options": [
      {
        "key": "A",
        "text": "Công nghiệp, nông nghiệp, giao thông vận tải"
      },
      {
        "key": "B",
        "text": "Sinh hoạt, công nghiệp, xây dựng"
      },
      {
        "key": "C",
        "text": "Sinh hoạt, công nghiệp, nông nghiệp"
      },
      {
        "key": "D",
        "text": "Sinh hoạt, công nghiệp, giao thông vận tải"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 78,
    "question": "Nước thải công nghiệp được phân loại bao gồm những loại nào?",
    "options": [
      {
        "key": "A",
        "text": "Nước giải nhiệt và nước thải sản xuất"
      },
      {
        "key": "B",
        "text": "Nước thải ô nhiễm hữu cơ và vô cơ"
      },
      {
        "key": "C",
        "text": "Nước thải nhà bếp và toalet"
      },
      {
        "key": "D",
        "text": "Nước thải văn phòng và nhà xưởng"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 79,
    "question": "Đâu là các thông số vật lý được sử dụng để đánh giá chất lượng nước?",
    "options": [
      {
        "key": "A",
        "text": "Nhiệt độ, mùi vị, màu"
      },
      {
        "key": "B",
        "text": "pH, màu, COD"
      },
      {
        "key": "C",
        "text": "Độ dẫn điện, độ acid, độ kiềm"
      },
      {
        "key": "D",
        "text": "Màu, mùi vị, DO"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 80,
    "question": "Đâu là các thông số sinh học được sử dụng để đánh giá chất lượng nước?",
    "options": [
      {
        "key": "A",
        "text": "Tổng Coliform, E. Coli"
      },
      {
        "key": "B",
        "text": "Nhiệt độ, mùi vị, màu"
      },
      {
        "key": "C",
        "text": "Nồng độ oxy hòa tan"
      },
      {
        "key": "D",
        "text": "BOD5, COD"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 81,
    "question": "Khi nguồn nước bị nhiễm E. Coli, người sử dụng có thể bị bệnh gì?",
    "options": [
      {
        "key": "A",
        "text": "Ung thư máu"
      },
      {
        "key": "B",
        "text": "Tiêu chảy, rối loạn tiêu hóa"
      },
      {
        "key": "C",
        "text": "Viêm gan, tiêu chảy, rối loạn tiêu hóa"
      },
      {
        "key": "D",
        "text": "Viêm phổi"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 82,
    "question": "Chất thải rắn được phân loại theo nguồn gốc hình thành bao gồm?",
    "options": [
      {
        "key": "A",
        "text": "Nguy hại và không nguy hại"
      },
      {
        "key": "B",
        "text": "Công nghiệp, nông nghiệp, sinh hoạt"
      },
      {
        "key": "C",
        "text": "Chất hữu cơ, vô cơ"
      },
      {
        "key": "D",
        "text": "Dễ phân hủy và khó phân hủy"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 83,
    "question": "Chất thải rắn được phân loại theo tính chất vật lý bao gồm?",
    "options": [
      {
        "key": "A",
        "text": "Công nghiệp, nông nghiệp, sinh hoạt"
      },
      {
        "key": "B",
        "text": "Kích thước lớn, nhỏ"
      },
      {
        "key": "C",
        "text": "Dễ cháy và khó cháy"
      },
      {
        "key": "D",
        "text": "Dễ phân hủy và khó phân hủy"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 84,
    "question": "Quan sát sơ đồ xử lý khí thải nồi hơi như hình và cho biết tên thiết bị A và B:",
    "options": [
      {
        "key": "A",
        "text": "Tháp hấp thụ; B: Cyclon."
      },
      {
        "key": "B",
        "text": "Tháp hấp phụ; B: Cyclon."
      },
      {
        "key": "C",
        "text": "Tháp hấp thụ; B: Lọc túi vải."
      },
      {
        "key": "D",
        "text": "Tháp hấp phụ; B: Lọc bụi tĩnh điện."
      }
    ],
    "answer": "A",
    "images": [
      "images/q84_1.png"
    ]
  },
  {
    "id": 440,
    "question": "Chất thải rắn được phân loại theo tính chất hóa học bao gồm?",
    "options": [
      {
        "key": "A",
        "text": "Công nghiệp, nông nghiệp, sinh hoạt"
      },
      {
        "key": "B",
        "text": "Dễ cháy và khó cháy"
      },
      {
        "key": "C",
        "text": "Trọng lượng lớn, nhỏ"
      },
      {
        "key": "D",
        "text": "Dễ phân hủy và khó phân hủy"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 85,
    "question": "Chất thải rắn được phân loại theo tính chất sinh học bao gồm?",
    "options": [
      {
        "key": "A",
        "text": "Công nghiệp, nông nghiệp, sinh hoạt"
      },
      {
        "key": "B",
        "text": "Dễ cháy và khó cháy"
      },
      {
        "key": "C",
        "text": "Dễ phân hủy và khó phân hủy"
      },
      {
        "key": "D",
        "text": "Trọng lượng lớn, nhỏ"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 86,
    "question": "Trong chất thải rắn ngành chế biến thực phẩm, thành phần nào sau đây chiếm ưu thế?",
    "options": [
      {
        "key": "A",
        "text": "Khó phân hủy sinh học"
      },
      {
        "key": "B",
        "text": "Không phân hủy sinh học"
      },
      {
        "key": "C",
        "text": "Dễ phân hủy sinh học"
      },
      {
        "key": "D",
        "text": "Nguy hại"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 87,
    "question": "Chất thải y tế được xếp vào nhóm chất thải nào?",
    "options": [
      {
        "key": "A",
        "text": "Không nguy hại"
      },
      {
        "key": "B",
        "text": "Nguy hại"
      },
      {
        "key": "C",
        "text": "Sinh hoạt gia đình"
      },
      {
        "key": "D",
        "text": "Công nghiệp"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 88,
    "question": "Thủy tinh, sành sứ là chất thải thuộc nhóm nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Chất nguy hại"
      },
      {
        "key": "B",
        "text": "Chất vô cơ"
      },
      {
        "key": "C",
        "text": "Chất dễ cháy"
      },
      {
        "key": "D",
        "text": "Chất hữu cơ"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 89,
    "question": "Cao su thiên nhiên phế thải là chất thải thuộc nhóm nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Chất nguy hại"
      },
      {
        "key": "B",
        "text": "Chất dễ cháy"
      },
      {
        "key": "C",
        "text": "Chất vô cơ"
      },
      {
        "key": "D",
        "text": "Chất hữu cơ"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 90,
    "question": "Giấy là chất thải thuộc nhóm nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Chất hữu cơ"
      },
      {
        "key": "B",
        "text": "Chất nguy hại"
      },
      {
        "key": "C",
        "text": "Chất khó cháy"
      },
      {
        "key": "D",
        "text": "Chất vô cơ"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 91,
    "question": "Đối với chất thải rắn sinh hoạt, quá trình phân loại nên được tiến hành ở đâu?",
    "options": [
      {
        "key": "A",
        "text": "Nguồn phát sinh"
      },
      {
        "key": "B",
        "text": "Trạm trung chuyển"
      },
      {
        "key": "C",
        "text": "Nhà máy xử lý"
      },
      {
        "key": "D",
        "text": "Bãi chôn lấp"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 92,
    "question": "Cơ quan nào chịu trách nhiệm chính trong việc thu gom rác công nghiệp (không bao gồm rác thải nguy hại) ở các đô thị Việt Nam?",
    "options": [
      {
        "key": "A",
        "text": "Phòng Tài nguyên môi trường"
      },
      {
        "key": "B",
        "text": "Chi cục bảo vệ môi trường"
      },
      {
        "key": "C",
        "text": "Sở Tài nguyên môi trường"
      },
      {
        "key": "D",
        "text": "Công ty Môi trường đô thị"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 93,
    "question": "Hiện nay ở Tp. HCM, chất thải rắn đô thị chủ yếu được xử lý như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Thiêu đốt"
      },
      {
        "key": "B",
        "text": "Tái chế"
      },
      {
        "key": "C",
        "text": "Tái sử dụng"
      },
      {
        "key": "D",
        "text": "Chôn lấp"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 94,
    "question": "Nguồn gây ô nhiễm môi trường đất bao gồm nguồn nào?",
    "options": [
      {
        "key": "A",
        "text": "Tự nhiên và nhân tạo"
      },
      {
        "key": "B",
        "text": "Công nghiệp, nông nghiệp"
      },
      {
        "key": "C",
        "text": "Sinh hoạt"
      },
      {
        "key": "D",
        "text": "Nhân tạo"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 95,
    "question": "Hiện tượng nào sau đây gây ô nhiễm môi trường đất?",
    "options": [
      {
        "key": "A",
        "text": "Thủy triều đỏ"
      },
      {
        "key": "B",
        "text": "Phú dưỡng hóa"
      },
      {
        "key": "C",
        "text": "Mưa axit"
      },
      {
        "key": "D",
        "text": "Suy giảm tầng ozone"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 96,
    "question": "Nguồn nước bị acid hóa có đặc điểm nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Nồng độ kim loại nặng trong nước giảm"
      },
      {
        "key": "B",
        "text": "Nồng độ kim loại nặng trong nước tăng"
      },
      {
        "key": "C",
        "text": "Nồng độ chất bảo vệ thực vật tăng"
      },
      {
        "key": "D",
        "text": "Nồng độ chất dinh dưỡng giảm"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 97,
    "question": "Nguyên nhân gây ra hiện tượng phú dưỡng hóa trong thủy vực là gì?",
    "options": [
      {
        "key": "A",
        "text": "Sự tăng oxi hòa tan trong nước"
      },
      {
        "key": "B",
        "text": "Giảm số lượng các loài thủy sinh"
      },
      {
        "key": "C",
        "text": "Chất nitơ và phospho hàm lượng cao"
      },
      {
        "key": "D",
        "text": "Diện tích ao, hồ bị thu hẹp"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 98,
    "question": "Nguyên nhân gây ra hiện tượng thủy triều đỏ là gì?",
    "options": [
      {
        "key": "A",
        "text": "Ô nhiễm chất hữu cơ và chất dinh dưỡng"
      },
      {
        "key": "B",
        "text": "Ô nhiễm chất hữu cơ, vô cơ"
      },
      {
        "key": "C",
        "text": "Tràn dầu, rò rỉ dầu"
      },
      {
        "key": "D",
        "text": "Ô nhiễm hóa chất độc hại"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 99,
    "question": "Chất ô nhiễm nào trong nước gây phát sinh mùi hôi và cản trở sự khuyếch tán oxy trên bề mặt?",
    "options": [
      {
        "key": "A",
        "text": "Chất dinh dưỡng N, P"
      },
      {
        "key": "B",
        "text": "Dầu mỡ"
      },
      {
        "key": "C",
        "text": "Chất hữu cơ dễ phân hủy sinh học"
      },
      {
        "key": "D",
        "text": "Chất màu"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 100,
    "question": "Chất thải nguy hại là chất thải có các tính chất nào sau dây?",
    "options": [
      {
        "key": "A",
        "text": "Tính ăn mòn, tính dễ cháy, tính phản ứng, tính bay hơi"
      },
      {
        "key": "B",
        "text": "Tính ăn mòn, tính dễ cháy, tính phóng xạ, tính lây nhiễm"
      },
      {
        "key": "C",
        "text": "Tính ăn mòn, tính dễ bay hơi, tính phóng xạ, tính độc hại"
      },
      {
        "key": "D",
        "text": "Tính ăn mòn, tính dễ cháy, tính phản ứng, tính độc hại"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 101,
    "question": "Loại chất thải nào sau đây không xếp chung vào nhóm các loại chất thải nguy hại, mà được tách riêng để quản lý và xử lý đặc biệt?",
    "options": [
      {
        "key": "A",
        "text": "Chất thải y tế"
      },
      {
        "key": "B",
        "text": "Pin, ác quy"
      },
      {
        "key": "C",
        "text": "chai lọ đựng hóa chất"
      },
      {
        "key": "D",
        "text": "Chất thải phóng xạ"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 102,
    "question": "Reduce trong nguyên tắc 3R có nghĩa là gì?",
    "options": [
      {
        "key": "A",
        "text": "Giảm thiểu"
      },
      {
        "key": "B",
        "text": "Gia tăng"
      },
      {
        "key": "C",
        "text": "Tái sử dụng"
      },
      {
        "key": "D",
        "text": "Tái chế"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 103,
    "question": "Nguyên tắc 3R trong quản lý chất thải rắn không bao gồm biện pháp nào?",
    "options": [
      {
        "key": "A",
        "text": "Xử lý"
      },
      {
        "key": "B",
        "text": "Tái sử dụng"
      },
      {
        "key": "C",
        "text": "Tái chế"
      },
      {
        "key": "D",
        "text": "Giảm thiểu"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 104,
    "question": "Nguyên tắc quan trọng nhất khi thu gom chất thải rắn là gì?",
    "options": [
      {
        "key": "A",
        "text": "Thu gom triệt để"
      },
      {
        "key": "B",
        "text": "Phân loại trước khi thu gom"
      },
      {
        "key": "C",
        "text": "Phân loại sau khi thu gom"
      },
      {
        "key": "D",
        "text": "Thu gom nhiều lần trong ngày"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 105,
    "question": "Biện pháp nào được ưu tiên hàng đầu trong việc hạn chế lượng rác thải hiện nay?",
    "options": [
      {
        "key": "A",
        "text": "Tái chế, tái sử dụng"
      },
      {
        "key": "B",
        "text": "Chôn lấp hợp vệ sinh"
      },
      {
        "key": "C",
        "text": "Giảm thiểu tại nguồn"
      },
      {
        "key": "D",
        "text": "Xử lý bằng các phương pháp cơ học"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 106,
    "question": "Biện pháp nào được xếp sau cùng trong việc hạn chế lượng rác thải hiện nay?",
    "options": [
      {
        "key": "A",
        "text": "Tái chế, tái sử dụng"
      },
      {
        "key": "B",
        "text": "Chôn lấp hợp vệ sinh"
      },
      {
        "key": "C",
        "text": "Giảm thiểu tại nguồn"
      },
      {
        "key": "D",
        "text": "Xử lý bằng các phương pháp cơ học"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 107,
    "question": "Phát biểu nào sau đây là sai về tái sử dụng chất thải rắn?",
    "options": [
      {
        "key": "A",
        "text": "Gây ô nhiễm môi trường"
      },
      {
        "key": "B",
        "text": "Sử dụng trực tiếp"
      },
      {
        "key": "C",
        "text": "Không làm thay đổi tính chất"
      },
      {
        "key": "D",
        "text": "Tiết kiệm tài nguyên"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 108,
    "question": "Thành phần nào trong rác thải sinh hoạt khi tái chế mang lại nhiều lợi ích nhất do tiết kiệm được nguyên vật liệu và năng lượng so với việc sản xuất sản phẩm mới?",
    "options": [
      {
        "key": "A",
        "text": "Lon nhôm"
      },
      {
        "key": "B",
        "text": "Vải, thủy tinh"
      },
      {
        "key": "C",
        "text": "Chất thải thực phẩm"
      },
      {
        "key": "D",
        "text": "Pin gia dụng"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 109,
    "question": "Phát biểu nào sau đây là sai về mục đích của tái chế chất thải rắn?",
    "options": [
      {
        "key": "A",
        "text": "Giảm chi phí phân loại và những tác động bất lợi gây ra đối với môi trường"
      },
      {
        "key": "B",
        "text": "Gây ô nhiễm và lãng phí năng lượng"
      },
      {
        "key": "C",
        "text": "Giảm đáng kể dung tích bãi chôn lấp"
      },
      {
        "key": "D",
        "text": "Giảm nhu cầu sử dụng tài nguyên"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 110,
    "question": "Việc thu hồi, tái sử dụng giấy mang lại lợi ích nào?",
    "options": [
      {
        "key": "A",
        "text": "Giảm thiểu khai thác tài nguyên rừng"
      },
      {
        "key": "B",
        "text": "Giảm lượng rác đổ về bãi chôn lấp"
      },
      {
        "key": "C",
        "text": "Tiết kiệm tài nguyên, năng lượng, giảm lượng rác thải"
      },
      {
        "key": "D",
        "text": "Giảm năng lượng tiêu thụ cho sản xuất"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 111,
    "question": "Trong các phương pháp xử lý sau, giải pháp nào ưu tiên để xử lý chất thải rắn sinh hoạt?",
    "options": [
      {
        "key": "A",
        "text": "Thiêu đốt"
      },
      {
        "key": "B",
        "text": "Thải bỏ trực tiếp"
      },
      {
        "key": "C",
        "text": "Ủ phân hữu cơ"
      },
      {
        "key": "D",
        "text": "Chôn lấp an toàn"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 112,
    "question": "Việc thu hồi, tái sử dụng giấy mang lại lợi ích nào?",
    "options": [
      {
        "key": "A",
        "text": "Giảm thiểu khai thác tài nguyên rừng"
      },
      {
        "key": "B",
        "text": "Giảm lượng rác đổ về bãi chôn lấp"
      },
      {
        "key": "C",
        "text": "Tiết kiệm tài nguyên, năng lượng, giảm lượng rác thải"
      },
      {
        "key": "D",
        "text": "Giảm năng lượng tiêu thụ cho sản xuất"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 113,
    "question": "Trong các phương pháp xử lý sau, giải pháp nào ưu tiên để xử lý chất thải rắn y tế?",
    "options": [
      {
        "key": "A",
        "text": "Ủ phân hữu cơ"
      },
      {
        "key": "B",
        "text": "Thải bỏ trực tiếp"
      },
      {
        "key": "C",
        "text": "Thiêu đốt"
      },
      {
        "key": "D",
        "text": "Chôn lấp an toàn"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 114,
    "question": "Trong các phương pháp xử lý sau, giải pháp nào ưu tiên để xử lý chất thải rắn chế biến thực phẩm?",
    "options": [
      {
        "key": "A",
        "text": "Thải bỏ trực tiếp"
      },
      {
        "key": "B",
        "text": "Ủ phân hữu cơ"
      },
      {
        "key": "C",
        "text": "Thiêu đốt"
      },
      {
        "key": "D",
        "text": "Chôn lấp an toàn"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 115,
    "question": "Chất nào gây bệnh baby blue ở trẻ em?",
    "options": [
      {
        "key": "A",
        "text": "Phosphate"
      },
      {
        "key": "B",
        "text": "Nitrate"
      },
      {
        "key": "C",
        "text": "Arsen"
      },
      {
        "key": "D",
        "text": "Thủy ngân"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 116,
    "question": "Khí thải axit gây ảnh hưởng gì đối với môi trường đất?",
    "options": [
      {
        "key": "A",
        "text": "Đất chua"
      },
      {
        "key": "B",
        "text": "Sa mạc hóa"
      },
      {
        "key": "C",
        "text": "Nhiễm phèn"
      },
      {
        "key": "D",
        "text": "Xói mòn"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 117,
    "question": "Phương pháp xử lý nước thải nào sau đây được đánh giá là thân thiện với môi trường?",
    "options": [
      {
        "key": "A",
        "text": "Sinh học"
      },
      {
        "key": "B",
        "text": "Vật lý"
      },
      {
        "key": "C",
        "text": "Hóa học"
      },
      {
        "key": "D",
        "text": "Tái sử dụng"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 118,
    "question": "Giải pháp nào sau đây được xem là tốt nhất trong việc hạn chế lượng nước thải phát sinh cũng như giảm bớt nồng độ các chất gây ô nhiễm nguồn nước?",
    "options": [
      {
        "key": "A",
        "text": "Sản xuất sạch hơn"
      },
      {
        "key": "B",
        "text": "Xây dựng các trạm xử lý nước thải trước khi thải vào nguồn tiếp nhận"
      },
      {
        "key": "C",
        "text": "Tái sử dụng nước sau xử lý cho các mục đích khác"
      },
      {
        "key": "D",
        "text": "Thải bỏ trực tiếp"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 119,
    "question": "Nước thải từ các nhà máy trong khu công nghiệp cần phải xử lý như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Xử lý sơ bộ rồi đưa về trạm xử lý tập trung"
      },
      {
        "key": "B",
        "text": "Xử lý sơ bộ rồi xả thải vào hệ thống cống chung"
      },
      {
        "key": "C",
        "text": "Có thể xả thải trực tiếp ra nguồn tiếp nhận"
      },
      {
        "key": "D",
        "text": "Xử lý, tái sử dụng 100 %"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 120,
    "question": "Giải pháp hợp lý đối với nước giải nhiệt trong các khu công nghiệp là gì?",
    "options": [
      {
        "key": "A",
        "text": "Đổ trực tiếp ra sông"
      },
      {
        "key": "B",
        "text": "Tái sử dụng"
      },
      {
        "key": "C",
        "text": "Đưa về trạm xử lý tập trung"
      },
      {
        "key": "D",
        "text": "Tưới tiêu nông nghiệp"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 121,
    "question": "Đối với chất thải công nghiệp, luật bảo vệ môi trường qui định cần phải xử lý như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Có thể thải trực tiếp ra môi trường"
      },
      {
        "key": "B",
        "text": "Các tổ chức, cá nhân phải có trách nhiệm xử lí chất thải bằng công nghệ thích hợp"
      },
      {
        "key": "C",
        "text": "Có thể tự do chuyên chở chất thải từ nơi này sang nơi khác"
      },
      {
        "key": "D",
        "text": "Các tổ chức, cá nhân phải có trách nhiệm chôn vào đất, miễn không ảnh hưởng đến khu dân cư"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 122,
    "question": "Bãi chôn lấp hợp vệ sinh xây dựng nhằm mục đích chính là gì?",
    "options": [
      {
        "key": "A",
        "text": "Cô lập chất thải"
      },
      {
        "key": "B",
        "text": "Khai thác điện"
      },
      {
        "key": "C",
        "text": "Hạn chế tối đa nguy cơ gây ô nhiễm môi trường"
      },
      {
        "key": "D",
        "text": "Thu hồi CH4 để sản xuất khí gas"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 123,
    "question": "Đâu không phải là tính chất của chất thải nguy hại?",
    "options": [
      {
        "key": "A",
        "text": "Dễ cháy nổ"
      },
      {
        "key": "B",
        "text": "Dễ biến đổi"
      },
      {
        "key": "C",
        "text": "Dễ ăn mòn"
      },
      {
        "key": "D",
        "text": "Dễ lây nhiễm"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 124,
    "question": "Những chiếc vỏ chai nước ngọt bằng nhựa được sử dụng làm bồn trồng hoa cảnh”, đây là biện pháp gì?",
    "options": [
      {
        "key": "A",
        "text": "Tái sử dụng"
      },
      {
        "key": "B",
        "text": "Giảm thiểu"
      },
      {
        "key": "C",
        "text": "Tái chế"
      },
      {
        "key": "D",
        "text": "Ngăn ngừa"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 125,
    "question": "“Chất thải hữu cơ được ủ hiếu khí để làm phân bón vi sinh”, đây là biện pháp thuộc nhóm nào?",
    "options": [
      {
        "key": "A",
        "text": "Tái chế"
      },
      {
        "key": "B",
        "text": "Tái sử dụng"
      },
      {
        "key": "C",
        "text": "Giảm thiểu"
      },
      {
        "key": "D",
        "text": "Thải bỏ"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 126,
    "question": "“Giấy in sau khi sử dụng được thu gom, phân loại, xay mịn, tẩy sạch, xeo giấy… để sản xuất giấy photocopy, giấy nháp”, đây là biện pháp gì?",
    "options": [
      {
        "key": "A",
        "text": "Tái sử dụng"
      },
      {
        "key": "B",
        "text": "Giảm thiểu"
      },
      {
        "key": "C",
        "text": "Ngăn ngừa"
      },
      {
        "key": "D",
        "text": "Tái chế"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 127,
    "question": "Tác hại của tia phóng xạ đối với con người không phụ thuộc vào yếu tố nào?",
    "options": [
      {
        "key": "A",
        "text": "Liều lượng phóng xạ"
      },
      {
        "key": "B",
        "text": "Thời gian tiếp xúc"
      },
      {
        "key": "C",
        "text": "Tình trạng sức khỏe"
      },
      {
        "key": "D",
        "text": "Chu kỳ bán rã"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 128,
    "question": "Bón phân tươi chưa qua xử lý không gây ra ảnh hưởng nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Mùi hôi"
      },
      {
        "key": "B",
        "text": "Chai hóa đất"
      },
      {
        "key": "C",
        "text": "Dịch bệnh"
      },
      {
        "key": "D",
        "text": "Nhiễm giun, sán"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 129,
    "question": "Nước mặt thường bị nhiễm bẩn bởi thành phần nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Kim loại nặng, chất hữu cơ, chất khoáng"
      },
      {
        "key": "B",
        "text": "Chất lơ lửng, chất hữu cơ, vi sinh vật"
      },
      {
        "key": "C",
        "text": "Chất hữu cơ, chất khoáng, vi sinh vật"
      },
      {
        "key": "D",
        "text": "Chất khoáng, vi sinh vật, chất lơ lửng"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 130,
    "question": "Nước ngầm thường bị nhiễm bẩn thành phần nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Chất hữu cơ, CH4, CO2"
      },
      {
        "key": "B",
        "text": "Kim loại, H2S, CO2"
      },
      {
        "key": "C",
        "text": "Sắt, mangan, vi sinh vật"
      },
      {
        "key": "D",
        "text": "CO2, mangan, vi sinh vật"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 131,
    "question": "Chất lượng nước ngầm thay đổi phụ thuộc vào những yếu tố nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Nhiệt độ, độ sâu, thổ nhưỡng"
      },
      {
        "key": "B",
        "text": "Độ sâu, mùa trong năm, thổ nhưỡng"
      },
      {
        "key": "C",
        "text": "Độ ẩm, độ sâu, thổ nhưỡng"
      },
      {
        "key": "D",
        "text": "Nhiệt độ, mùa trong năm, độ sâu"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 132,
    "question": "Vùng nào sau đây có thường có hàm lượng muối thấp?",
    "options": [
      {
        "key": "A",
        "text": "Xa bờ biển"
      },
      {
        "key": "B",
        "text": "Biển sâu"
      },
      {
        "key": "C",
        "text": "Gần bờ biển"
      },
      {
        "key": "D",
        "text": "Không thể xác định được"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 133,
    "question": "Để tạo nước uống từ nước biển, người ta dùng biện pháp gì sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Keo tụ- tạo bông"
      },
      {
        "key": "B",
        "text": "Lắng"
      },
      {
        "key": "C",
        "text": "Chưng cất"
      },
      {
        "key": "D",
        "text": "Trao đổi ion"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 134,
    "question": "Nếu sử dụng trực tiếp nước biển sẽ dẫn đến triệu chứng gì?",
    "options": [
      {
        "key": "A",
        "text": "Tiêu chảy"
      },
      {
        "key": "B",
        "text": "Đau đầu"
      },
      {
        "key": "C",
        "text": "Khát nước"
      },
      {
        "key": "D",
        "text": "Tạo vị mặn"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 135,
    "question": "Chất rắn trong nước được xác định ở nhiệt độ nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "5500C"
      },
      {
        "key": "B",
        "text": "5050C"
      },
      {
        "key": "C",
        "text": "1050C"
      },
      {
        "key": "D",
        "text": "6500C"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 136,
    "question": "Clo hóa sơ bộ cho nguồn nước có nhiều chất hữu cơ có thể tạo ra chất gì sau đây?",
    "options": [
      {
        "key": "A",
        "text": "CHF3"
      },
      {
        "key": "B",
        "text": "CHI3"
      },
      {
        "key": "C",
        "text": "CHCl3"
      },
      {
        "key": "D",
        "text": "CHBr3"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 137,
    "question": "Nước cứng có thể gây bệnh là gì?",
    "options": [
      {
        "key": "A",
        "text": "Bệnh về thận"
      },
      {
        "key": "B",
        "text": "Bệnh về gan"
      },
      {
        "key": "C",
        "text": "Bệnh về đường tiêu hóa"
      },
      {
        "key": "D",
        "text": "Bệnh ung thư"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 138,
    "question": "Tác hại của nước chứa nhiều nitơ là gì?",
    "options": [
      {
        "key": "A",
        "text": "Hội chứng trẻ xanh"
      },
      {
        "key": "B",
        "text": "Máu khó đông"
      },
      {
        "key": "C",
        "text": "Tay chân miệng"
      },
      {
        "key": "D",
        "text": "Viêm gan"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 139,
    "question": "Tác hại của nước chứa nhiều Mangan là gì?",
    "options": [
      {
        "key": "A",
        "text": "Bệnh Gout"
      },
      {
        "key": "B",
        "text": "Bệnh Pakison"
      },
      {
        "key": "C",
        "text": "Bệnh ung thư"
      },
      {
        "key": "D",
        "text": "Hội chứng Alzheimei"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 140,
    "question": "Tác hại của nước chứa nhiều nhôm là gì?",
    "options": [
      {
        "key": "A",
        "text": "Bệnh Gout"
      },
      {
        "key": "B",
        "text": "Bệnh Pakison"
      },
      {
        "key": "C",
        "text": "Hội chứng Alzheimei"
      },
      {
        "key": "D",
        "text": "Bệnh ung thư"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 141,
    "question": "Để xử lý nước mặt, người ta thường dùng công trình gì?",
    "options": [
      {
        "key": "A",
        "text": "Làm thoáng"
      },
      {
        "key": "B",
        "text": "Công nghệ AO"
      },
      {
        "key": "C",
        "text": "Công nghệ nano"
      },
      {
        "key": "D",
        "text": "Keo tụ tạo bông"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 142,
    "question": "Để xử lý nước ngầm, người ta thường dùng công trình gì?",
    "options": [
      {
        "key": "A",
        "text": "Làm thoáng"
      },
      {
        "key": "B",
        "text": "Công nghệ sinh học"
      },
      {
        "key": "C",
        "text": "Công nghệ nano"
      },
      {
        "key": "D",
        "text": "Công nghệ AO"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 143,
    "question": "Chất khử trùng bắt buộc sử dụng cho nhà máy xử lý nước cấp là gì?",
    "options": [
      {
        "key": "A",
        "text": "Ozone"
      },
      {
        "key": "B",
        "text": "Hydrogen Peroxide"
      },
      {
        "key": "C",
        "text": "Kali Pemanganat"
      },
      {
        "key": "D",
        "text": "Chlorine"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 144,
    "question": "Mệnh đề nào sao đây đúng ?",
    "options": [
      {
        "key": "A",
        "text": "Nước mưa chứa nhiều tạp chất khoáng"
      },
      {
        "key": "B",
        "text": "Nước mưa được sử dụng phổ biến hơn nước mặt và nước ngầm"
      },
      {
        "key": "C",
        "text": "Nước mặt được khai thác dùng làm nguồn nước cấp phổ biến nhất"
      },
      {
        "key": "D",
        "text": "Nước ngầm thường có hàm lượng vi sinh vật rất cao"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 145,
    "question": "Hạt keo trong nước tự nhiên thường có điện tích gì?",
    "options": [
      {
        "key": "A",
        "text": "Hạt keo mang điện tích dương"
      },
      {
        "key": "B",
        "text": "Hạt keo mang điện tích âm"
      },
      {
        "key": "C",
        "text": "Hạt keo mang điện tích âm và dương"
      },
      {
        "key": "D",
        "text": "Hạt keo không mang điện tích"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 146,
    "question": "Vì sao 2 hạt keo âm trong nước tự nhiên không thể kết tụ với nhau?",
    "options": [
      {
        "key": "A",
        "text": "Vì không có chất trợ keo tụ"
      },
      {
        "key": "B",
        "text": "Vì không có sự xáo trộn cơ khí"
      },
      {
        "key": "C",
        "text": "Vì cùng điện tích chúng sẽ đẩy nhau"
      },
      {
        "key": "D",
        "text": "Vì điện tích không đủ lớn"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 147,
    "question": "2 lực chủ yếu tác dụng lên 2 hạt keo trong nước là gì?",
    "options": [
      {
        "key": "A",
        "text": "Lực đẩy tĩnh điện và lực kéo"
      },
      {
        "key": "B",
        "text": "Lực đẩy tĩnh điện và lực hút phân tử"
      },
      {
        "key": "C",
        "text": "Lực hút phân tử và lực tổng hợp"
      },
      {
        "key": "D",
        "text": "Lực hút phân tử và ngoại lực"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 148,
    "question": "Vì sao quá trình keo tụ cần phải khuấy trộn?",
    "options": [
      {
        "key": "A",
        "text": "Để trộn đều hóa chất và tạo điều kiện tiếp xúc tốt."
      },
      {
        "key": "B",
        "text": "Để cung cấp ngoại lực tác động vào nước."
      },
      {
        "key": "C",
        "text": "Để phá vỡ các hạt bông cặn trong nước."
      },
      {
        "key": "D",
        "text": "Để tạo sự đồng đều giữ các vùng trong nước."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 149,
    "question": "Tại sao quá trình keo tụ cần phải điều chỉnh pH?",
    "options": [
      {
        "key": "A",
        "text": "Vì pH thấp hoặc cao đều làm tan hạt keo."
      },
      {
        "key": "B",
        "text": "Vì pH phù hợp sẽ xúc tác quá trình keo tụ diễn ra nhanh hơn."
      },
      {
        "key": "C",
        "text": "Vì pH cao hiệu quả keo tụ sẽ tốt hơn."
      },
      {
        "key": "D",
        "text": "Vì pH thấp hiệu quả keo tụ sẽ tốt hơn"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 150,
    "question": "Phát biểu nào sau đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "FeCl3 là chất trợ keo tụ."
      },
      {
        "key": "B",
        "text": "FeCl3 là chất độc, tránh sử dụng."
      },
      {
        "key": "C",
        "text": "FeCl3 là chất làm mầm keo tụ."
      },
      {
        "key": "D",
        "text": "FeCl3 dùng để điều chỉnh pH."
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 151,
    "question": "Polimer cho vào bể tạo bông nhằm mục đích gì?",
    "options": [
      {
        "key": "A",
        "text": "Chất xúc tác cho quá trình keo tụ, tăng hiệu quả xử lý"
      },
      {
        "key": "B",
        "text": "Tăng điện tích cho các hạt keo, tăng hiệu lắng"
      },
      {
        "key": "C",
        "text": "Tạo sự kết dính cho các hạt bông cặn, tăng hiệu quả lắng"
      },
      {
        "key": "D",
        "text": "Loại bỏ tạp chất trong nước, tăng hiệu quả xử lý"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 152,
    "question": "Tại sao tốc độ khuấy bể keo tụ cao hơn bể tạo bông?",
    "options": [
      {
        "key": "A",
        "text": "Thực tế bể keo tụ vào tạo bông có tốc độ khuấy trộn tương đương"
      },
      {
        "key": "B",
        "text": "Hỗn hợp bùn trong bể keo tụ đậm đặc hơn, độ nhớt cao hơn nên cần khuấy nhanh."
      },
      {
        "key": "C",
        "text": "Keo tụ cần khuấy nhanh để trộn đều hóa chất còn Tạo bông khi khuấy nhanh sẽ làm bông vỡ."
      },
      {
        "key": "D",
        "text": "Bể keo tụ nhỏ hơn bể tạo bông nên cần khuấy nhanh để tạo đủ năng lượng khuấy trộn phù hợp."
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 153,
    "question": "pH tối ưu khi keo tụ dùng phèn nhôm là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "pH trong khoảng 2.0 - 4.0"
      },
      {
        "key": "B",
        "text": "pH trong khoảng 3.5 - 6.5"
      },
      {
        "key": "C",
        "text": "pH trong khoảng 5.5 - 7.5"
      },
      {
        "key": "D",
        "text": "pH trong khoảng 7.5 - 9.0"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 154,
    "question": "pH tối ưu khi keo tụ dùng phèn sắt (III) là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "pH trong khoảng 2.0 - 3.5"
      },
      {
        "key": "B",
        "text": "pH trong khoảng 5.5 - 6.5"
      },
      {
        "key": "C",
        "text": "pH trong khoảng 7.0 - 11.0"
      },
      {
        "key": "D",
        "text": "pH trong khoảng 6.5 - 10.5"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 155,
    "question": "pH tối ưu khi dùng phèn PAC là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "pH trong khoảng 7.0 - 10.0"
      },
      {
        "key": "B",
        "text": "pH trong khoảng 2.0 - 4.0"
      },
      {
        "key": "C",
        "text": "pH trong khoảng 4.0 - 6.0"
      },
      {
        "key": "D",
        "text": "pH trong khoảng 4.0 - 8.0"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 156,
    "question": "Công thức phèn nhôm là gì?",
    "options": [
      {
        "key": "A",
        "text": "Al2(SO4)3"
      },
      {
        "key": "B",
        "text": "AlCl3"
      },
      {
        "key": "C",
        "text": "Al(OH)3"
      },
      {
        "key": "D",
        "text": "Al(OH)2+"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 157,
    "question": "Công thức phèn sắt thường dùng trong xử lý nước cấp là gì?",
    "options": [
      {
        "key": "A",
        "text": "Fe(OH)3"
      },
      {
        "key": "B",
        "text": "FeSO4"
      },
      {
        "key": "C",
        "text": "Fe(OH)2"
      },
      {
        "key": "D",
        "text": "FeCl3"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 158,
    "question": "Khi nước có hàm lượng muối cao thì nên dùng loại phèn nào để keo tụ?",
    "options": [
      {
        "key": "A",
        "text": "Phèn nhôm"
      },
      {
        "key": "B",
        "text": "PAC"
      },
      {
        "key": "C",
        "text": "Phèn sắt"
      },
      {
        "key": "D",
        "text": "Không xử lý được"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 159,
    "question": "Nhiệt độ ảnh hưởng thế nào đến quá trình keo tụ?",
    "options": [
      {
        "key": "A",
        "text": "Nhiệt độ cao phèn xốp khó lắng, nhiệt độ thấp làm phèn dễ vỡ."
      },
      {
        "key": "B",
        "text": "Nhiệt độ cao làm phèn dễ vỡ, nhiệt độ thấp phèn xốp khó lắng."
      },
      {
        "key": "C",
        "text": "Làm phản ứng với dung dịch keo tụ khó xảy ra."
      },
      {
        "key": "D",
        "text": "Bông bùn nổi không kiểm soát."
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 160,
    "question": "Mệnh đề nào sau đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "Keo tụ tạo bông trong nước cấp phải dùng polime cation"
      },
      {
        "key": "B",
        "text": "Để điều chỉnh pH trong xử lý nước cấp người ta dùng NaOH"
      },
      {
        "key": "C",
        "text": "Phèn nhôm được dùng phổ biến nhất trong xử lý nước cấp"
      },
      {
        "key": "D",
        "text": "Hóa chất sử dụng trong keo tụ tạo bông là phèn, polime, chất điều chỉnh pH"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 161,
    "question": "Mệnh đề nào sau đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "Phèn nhôm khi cho vào nước sẽ lập tức trung hòa điện tích với hệ keo trong nước."
      },
      {
        "key": "B",
        "text": "Phèn nhôm khi cho vào nước sẽ bị thủy phân thành Al(OH)3."
      },
      {
        "key": "C",
        "text": "Phèn nhôm khi cho vào nước sẽ tăng pH của nước."
      },
      {
        "key": "D",
        "text": "Phèn nhôm thương phẩm có dạng bột vàng nâu."
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 162,
    "question": "Mệnh đề nào sau đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "Phèn sắt khi cho vào nước sẽ lập tức trung hòa điện tích với hệ keo trong nước."
      },
      {
        "key": "B",
        "text": "Phèn sắt khi cho vào nước sẽ tăng pH của nước."
      },
      {
        "key": "C",
        "text": "Phèn sắt thương phẩm có dạng tinh thể màu trắng."
      },
      {
        "key": "D",
        "text": "Phèn sắt khi cho vào nước sẽ bị thủy phân thành Fe(OH)3."
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 163,
    "question": "Mệnh đề nào sau đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "Hệ thống keo tụ phải được đặt cuối công trình xử lý"
      },
      {
        "key": "B",
        "text": "Bể keo tụ có thể đặt sau bể tạo bông, tùy từng trường hợp cụ thể."
      },
      {
        "key": "C",
        "text": "Hệ thống keo tụ tạo bông được đặt ở trước bể lắng"
      },
      {
        "key": "D",
        "text": "Tùy vào đặc tính nguồn nước mà nên đặt bể keo tụ sau bể lắng hoặc bể lọc"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 164,
    "question": "Mục đích quá trình lắng trong xử lý nước cấp là gì?",
    "options": [
      {
        "key": "A",
        "text": "Loại bỏ được hàm lượng các chất hữu cơ trong nước"
      },
      {
        "key": "B",
        "text": "Loại bỏ được độ màu trong nước"
      },
      {
        "key": "C",
        "text": "Loại bỏ được cặn rác tinh"
      },
      {
        "key": "D",
        "text": "Tách bông cặn sau quá trình keo tụ"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 165,
    "question": "Lắng độc lập được hiểu là gì?",
    "options": [
      {
        "key": "A",
        "text": "Lắng độc lập là hạt cặn khi lắng xuống sẽ tạo được hạt cặn lớn hơn hạt ban đầu."
      },
      {
        "key": "B",
        "text": "Lắng độc lập là hạt cặn khi lắng xuống sẽ tạo được hạt cặn nhỏ hơn hạt ban đầu."
      },
      {
        "key": "C",
        "text": "Lắng độc lập là hạt cặn khi lắng xuống riêng lẽ không có sự liên kết với các hạt khác."
      },
      {
        "key": "D",
        "text": "Lắng độc lập là hạt cặn khi lắng xuống có sự liên kết với các hạt khác"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 166,
    "question": "Hoạt động của bể lắng ngang diễn ra như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Nước đi từ dưới lên qua lớp cặn lơ lửng được hình thành trong quá trình lắng, cặn dính bám vào lớp cặn, nước trong thu trên bề mặt, cặn thừa được đưa sang ngăn nén cặn, từng thời kì xả thải ra ngoài."
      },
      {
        "key": "B",
        "text": "Nước vào bể qua ống dẫn nước vào, được tấm chắn phân phối phân phối nước đều vào vùng lắng. Lượng cặn lắng xuống được dàn cào bùn đưa về hố thu bùn. Nước theo mương thu nước ra qua ống nước ra chảy ra ngoài."
      },
      {
        "key": "C",
        "text": "Nước được cho vào bể theo ống trung tâm, nước chảy từ dưới lên vào các rãnh chảy tràn, các hạt cặn lắng xuống trong quá trình nước chảy từ dưới lên. Các hạt cặn lắng xuống dưới đáy bể được đưa ra ngoài bằng hệ thống hút bùn."
      },
      {
        "key": "D",
        "text": "Nước vào bể qua ống dẫn nước vào, được tấm chắn phân phối phân phối nước đều vào vùng lắng, cặn dính bám vào lớp cặn, nước trong thu trên bề mặt, cặn thừa được đưa sang ngăn nén cặn, từng thời kì xả ra ngoài."
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 167,
    "question": "Các thành phần chính trong bể lắng đứng là gì?",
    "options": [
      {
        "key": "A",
        "text": "Tấm Lamen, máng phân phối, ống nước vào"
      },
      {
        "key": "B",
        "text": "Ống trung tâm cánh gạt bùn, ngăn tạo bông"
      },
      {
        "key": "C",
        "text": "Ống trung tâm, cánh gạt bùn, máng răng cưa"
      },
      {
        "key": "D",
        "text": "Ngăn tạo bông, ngăn keo tụ, ống trung tâm"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 168,
    "question": "Hoạt động của bể lắng đứng diễn ra như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Nước được cho vào bể theo ống trung tâm, nước chảy từ dưới lên vào các rãnh chảy tràn, các hạt cặn lắng xuống trong quá trình nước chảy từ dưới lên. Các hạt cặn lắng xuống dưới đáy bể được đưa ra ngoài bằng hệ thống hút bùn."
      },
      {
        "key": "B",
        "text": "Nước vào bể qua ống dẫn nước vào, được tấm chắn phân phối phân phối nước đều vào vùng lắng. Lượng cặn lắng xuống được dàn cào bùn đưa về hố thu bùn. Nước theo mương thu nước ra qua ống nước ra chảy ra ngoài."
      },
      {
        "key": "C",
        "text": "Nước được cho vào bể theo ống trung tâm, được tấm chắn phân phối phân phối nước đều vào vùng lắng. Lượng cặn lắng xuống được dàn cào bùn đưa về hố thu bùn. Nước theo mương thu nước ra qua ống nước ra chảy ra ngoài."
      },
      {
        "key": "D",
        "text": "Nước vào bể qua ống dẫn nước vào, nước chảy từ dưới lên vào các rãnh chảy tràn, các hạt cặn lắng xuống trong quá trình nước chảy từ dưới lên. Các hạt cặn lắng xuống dưới đáy bể được đưa ra ngoài bằng hệ thống hút bùn."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 169,
    "question": "Mệnh đề nào sau đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "Bùn nổi trong bể lắng là do vận tốc lắng quá chậm."
      },
      {
        "key": "B",
        "text": "Bùn nổi trong bể lắng là do tỷ lệ độ cao và chiều rộng chưa phù hợp."
      },
      {
        "key": "C",
        "text": "Một nguyên nhân tạo bùn nổi là thời gian lưu bùn bể lắng quá dài."
      },
      {
        "key": "D",
        "text": "Bùn nổi trong bể lắng là do thời gian lắng chưa đủ"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 170,
    "question": "Mệnh đề nào sau đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "Lắng cát là dạng lắng độc lập."
      },
      {
        "key": "B",
        "text": "Lắng bông cặn là dạng lắng độc lập."
      },
      {
        "key": "C",
        "text": "Lắng cặn nước mặt là dạng lắng độc lập."
      },
      {
        "key": "D",
        "text": "Lắng cặn nước ngầm là dạng lắng độc lập"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 171,
    "question": "Quá trình lọc nước cấp được hiểu là gì?",
    "options": [
      {
        "key": "A",
        "text": "Cho nước đi qua lớp vật liệu lọc với chiều dày nhất định đủ giữ lại trên bề mặt hoặc giữa các khe hở của vật liệu lọc các cặn và vi khuẩn trong nước."
      },
      {
        "key": "B",
        "text": "Cho nước đi qua lớp vật liệu lọc với chiều dày nhất định đủ giữ lại trên bề mặt của vật liệu lọc các cặn và vi khuẩn trong nước."
      },
      {
        "key": "C",
        "text": "Cho nước đi qua lớp vật liệu lọc với chiều dày nhất định đủ giữ lại trên bề mặt hoặc giữa các khe hở của vật liệu lọc các cặn trong nước."
      },
      {
        "key": "D",
        "text": "Cho nước đi qua lớp vật liệu lọc đủ giữ lại trên bề mặt hoặc giữa các khe hở của vật liệu lọc các cặn và vi khuẩn trong nước"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 172,
    "question": "Mục đích của quá trình lọc nước là gì?",
    "options": [
      {
        "key": "A",
        "text": "Loại bỏ độ đục, vi khuẩn"
      },
      {
        "key": "B",
        "text": "Loại bỏ các cặn lơ lửng, độ đục, độ màu"
      },
      {
        "key": "C",
        "text": "Loại bỏ độ màu"
      },
      {
        "key": "D",
        "text": "Loại bỏ các hợp chất hữu cơ"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 173,
    "question": "Trong hệ thống xử lý nước cấp, bể lọc được đặt ở vị trí nào?",
    "options": [
      {
        "key": "A",
        "text": "Trước bể keo tụ tạo bông"
      },
      {
        "key": "B",
        "text": "Sau bể khử trùng"
      },
      {
        "key": "C",
        "text": "Sau bể lắng"
      },
      {
        "key": "D",
        "text": "Trước bể lắng"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 174,
    "question": "Trong hệ thống xử lý nước, bể lọc thường ứng dụng trong loại nước nào?",
    "options": [
      {
        "key": "A",
        "text": "Xử lý nước thải"
      },
      {
        "key": "B",
        "text": "Xử lý nước cấp"
      },
      {
        "key": "C",
        "text": "Xử lý nước thải và nước cấp"
      },
      {
        "key": "D",
        "text": "Xử lý nước có hàm lượng cặn lơ lửng cao"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 175,
    "question": "Trong quá trình lọc nhanh, thông số nào sau đây sẽ tăng theo thời gian?",
    "options": [
      {
        "key": "A",
        "text": "Lượng nước thu được sau lọc"
      },
      {
        "key": "B",
        "text": "Tốc độ lọc"
      },
      {
        "key": "C",
        "text": "Độ nhớt của nước"
      },
      {
        "key": "D",
        "text": "Tổn thất áp lực"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 176,
    "question": "Vì sao vỏ trấu không thể dùng làm vật liệu lọc nước cấp?",
    "options": [
      {
        "key": "A",
        "text": "Vỏ tro trấu sử dụng lâu ngày nếu không thay sẽ ảnh hưởng sức khỏe"
      },
      {
        "key": "B",
        "text": "Vỏ tro trấu không thể loại bỏ hoàn toàn được mọi chất bẩn và chất bẩn khó xử lý"
      },
      {
        "key": "C",
        "text": "Vỏ tro trấu dễ phân hủy sinh học, ảnh hưởng đến chất lượng nước đầu ra"
      },
      {
        "key": "D",
        "text": "Vỏ tro trấu không thể thường xuyên sục xả các cặn bẩn"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 177,
    "question": "Vật liệu lọc phổ biến trong xử lý nước cấp là gì?",
    "options": [
      {
        "key": "A",
        "text": "Cát thạch anh, than antracite, birm"
      },
      {
        "key": "B",
        "text": "Cát thạch anh, sỏi, than antracite, đá nâng pH"
      },
      {
        "key": "C",
        "text": "Cát thạch anh, than hoạt tính, polime"
      },
      {
        "key": "D",
        "text": "Cát thạch anh, than antracite, cát mangan"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 178,
    "question": "Với lưu lượng nước 1 m3/h, vận tốc lọc 1 m/h, diện tích bể lọc là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "2 m2"
      },
      {
        "key": "B",
        "text": "1 m2"
      },
      {
        "key": "C",
        "text": "10 m2"
      },
      {
        "key": "D",
        "text": "Không thể xác định"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 179,
    "question": "Một ưu điểm của bể lọc áp lực là gì?",
    "options": [
      {
        "key": "A",
        "text": "Chi phí vận hành rẻ"
      },
      {
        "key": "B",
        "text": "Quản lý và vận hành đơn giản"
      },
      {
        "key": "C",
        "text": "Gọn, lắp đặt nhanh và dễ đáp ứng"
      },
      {
        "key": "D",
        "text": "Chi phí đầu tư rẻ"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 180,
    "question": "Một ưu điểm của bể lọc chậm là gì?",
    "options": [
      {
        "key": "A",
        "text": "Có thể thay thế bể khử trùng"
      },
      {
        "key": "B",
        "text": "Rửa lọc đơn giản"
      },
      {
        "key": "C",
        "text": "Có thể sử dụng trực tiếp"
      },
      {
        "key": "D",
        "text": "Không cần keo tụ"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 181,
    "question": "Vật liệu nào sau đây không thể sử dụng cho bể lọc",
    "options": [
      {
        "key": "A",
        "text": "Cát thạch anh"
      },
      {
        "key": "B",
        "text": "Đá vôi"
      },
      {
        "key": "C",
        "text": "Đá granite nghiền"
      },
      {
        "key": "D",
        "text": "Than anthracite"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 182,
    "question": "Khi dùng cát xây dựng để lọc nước, một sự cố thường xảy ra là gì?",
    "options": [
      {
        "key": "A",
        "text": "Tốc độ lọc nhanh không kiểm soát được"
      },
      {
        "key": "B",
        "text": "Vật liệu lọc dễ vỡ"
      },
      {
        "key": "C",
        "text": "Tốc độ lọc chậm, dễ tắc lọc"
      },
      {
        "key": "D",
        "text": "Hiệu quả xử lý kém"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 183,
    "question": "Khi dùng cát xây dựng để lọc nước, một sự cố thường xảy ra là gì?",
    "options": [
      {
        "key": "A",
        "text": "Hiện tượng áp lực tăng cao đột ngột"
      },
      {
        "key": "B",
        "text": "Vật liệu lọc dễ vỡ"
      },
      {
        "key": "C",
        "text": "Bể lọc và bể chứa có thể xuất hiện rong tảo"
      },
      {
        "key": "D",
        "text": "Bể lọc xuất hiện khí"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 184,
    "question": "Công trình lọc nước khử sắt cho hộ gia đình, loại bể lọc nào cần sử dụng để đảm bảo tiết kiệm diện tích?",
    "options": [
      {
        "key": "A",
        "text": "Bể lọc nhanh"
      },
      {
        "key": "B",
        "text": "Bể lọc chậm"
      },
      {
        "key": "C",
        "text": "Bể lọc áp lực"
      },
      {
        "key": "D",
        "text": "Bể lọc sinh học"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 185,
    "question": "Công trình lọc nước khử sắt cho hộ gia đình, loại bể lọc nào cần sử dụng để tiết kiệm năng lượng và diện tích?",
    "options": [
      {
        "key": "A",
        "text": "Bể lọc áp lực"
      },
      {
        "key": "B",
        "text": "Bể lọc chậm"
      },
      {
        "key": "C",
        "text": "Bể lọc nhanh"
      },
      {
        "key": "D",
        "text": "Bể lọc sinh học"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 186,
    "question": "Phát biểu nào sau đây đúng?",
    "options": [
      {
        "key": "A",
        "text": "Khi tốc độ lọc giảm thì trở lực trong bể lọc cũng giảm"
      },
      {
        "key": "B",
        "text": "Sau một thời gian hoạt động, lớp vật liệu lọc bị bẩn, làm tốc độ lọc giảm dần."
      },
      {
        "key": "C",
        "text": "Khi trở lực giảm đến 0 là lúc phải tiến hành rửa lọc"
      },
      {
        "key": "D",
        "text": "Khi tốc độ lọc giảm về 0 là lúc phải tiến hành rửa lọc"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 187,
    "question": "Có những tác nhân khử trùng nước cấp nào?",
    "options": [
      {
        "key": "A",
        "text": "Nhiệt, tia UV, dùng chất oxy hóa mạnh, plasma"
      },
      {
        "key": "B",
        "text": "Lý học, hóa lý, sinh học"
      },
      {
        "key": "C",
        "text": "Nhiệt, tia UV, sóng siêu âm, lọc, dùng chất oxy hóa mạnh"
      },
      {
        "key": "D",
        "text": "Lý học, hóa học, sinh học"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 188,
    "question": "Phương pháp khử trùng triệt để bằng nhiệt được thực hiện như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Nước được đun đến 105 trong 5 phút."
      },
      {
        "key": "B",
        "text": "Nước được đun đến 100 (t=15 - 20p), để nguội, đun sôi một lần nữa."
      },
      {
        "key": "C",
        "text": "Nước được đun đến 100 (t=10 - 15p), lặp lại nhiều lần."
      },
      {
        "key": "D",
        "text": "Nước được đun đến 100 trong 5 phút."
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 189,
    "question": "Ưu điểm của phương pháp khử trùng bằng nhiệt là?",
    "options": [
      {
        "key": "A",
        "text": "Đơn giản, dễ thực hiện, hiệu quả cao"
      },
      {
        "key": "B",
        "text": "Đơn giản, chi phí thấp, quy mô nhỏ"
      },
      {
        "key": "C",
        "text": "Đơn giản, dễ thực hiện, quy mô nhỏ"
      },
      {
        "key": "D",
        "text": "Đơn giản, dễ thực hiện, chi phí thấp"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 190,
    "question": "Nhược điểm của phương pháp khử trùng bằng nhiệt là gì?",
    "options": [
      {
        "key": "A",
        "text": "Chi phí xử lý cao"
      },
      {
        "key": "B",
        "text": "Khó thực hiện"
      },
      {
        "key": "C",
        "text": "Hiệu quả thấp"
      },
      {
        "key": "D",
        "text": "Tốn thời gian"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 191,
    "question": "Tia UV loại bỏ vi sinh vật như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Tia UV phá hủy các liên kết phân tử trong DNA làm vi sinh vật chết."
      },
      {
        "key": "B",
        "text": "Tia UV tác dụng rất mạnh lên các nhân tế bào của vi sinh vật"
      },
      {
        "key": "C",
        "text": "Tia UV tác dụng làm biến dạng hay giết chết vi sinh vật"
      },
      {
        "key": "D",
        "text": "Tia UV bị hấp phụ lên bề mặt tế bào, sinh nhiệt và giết vi sinh vật"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 192,
    "question": "Thành phần nào trong nước làm giảm hiệu quả khử trùng bằng tia UV?",
    "options": [
      {
        "key": "A",
        "text": "Tổng chất răn lơ lửng, tổng chất rắn hòa tan, độ đục"
      },
      {
        "key": "B",
        "text": "Tổng chất răn lơ lửng, sắt và mangan, độ đục, độ màu"
      },
      {
        "key": "C",
        "text": "Sắt và mangan, tổng chất răn lơ lửng, độ đục"
      },
      {
        "key": "D",
        "text": "Sắt và mangan, độ màu, nhiệt độ, tổng chất răn lơ lửng"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 193,
    "question": "Nhược điểm của quá trình khử trùng bằng tia UV là gì?",
    "options": [
      {
        "key": "A",
        "text": "Tốn chi phí đầu tư, và mặt bằng xử lý"
      },
      {
        "key": "B",
        "text": "Tốn năng lượng, tạo ra nhiều chất có tiềm năng ung thư"
      },
      {
        "key": "C",
        "text": "Chi phí thay mới cao, tạo nhiều sản phẩm phụ độc hại"
      },
      {
        "key": "D",
        "text": "Tốn năng lượng, hiệu suất giảm khi có sắt, mangan, độ đục cao"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 194,
    "question": "Các hóa chất nào sau đây được dùng để khử trùng nước?",
    "options": [
      {
        "key": "A",
        "text": "NaOH, NaOCl, O3"
      },
      {
        "key": "B",
        "text": "Ca(OCl)2, O3, CaCl2"
      },
      {
        "key": "C",
        "text": "Cl2, O3, ClO2"
      },
      {
        "key": "D",
        "text": "O2, O3, Cl2"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 195,
    "question": "Các loại hóa chất nào gốc clo thường dùng để khử trùng nước?",
    "options": [
      {
        "key": "A",
        "text": "Cl2, NaOCl, Ca(OCl)2"
      },
      {
        "key": "B",
        "text": "Cl2, NaOCl, HOCl"
      },
      {
        "key": "C",
        "text": "Cl2, Ca(OCl)2 , HOCl"
      },
      {
        "key": "D",
        "text": "NaOCl, Ca(OCl)2 , HOCl"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 196,
    "question": "Ưu điểm của quá trình khử trùng bằng clo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Chi phí thấp, tạo được dư lượng chất khử trùng, loại bỏ một số mùi độc hại"
      },
      {
        "key": "B",
        "text": "Clo dư có thể tăng hiệu quả xử lý, loại bỏ một số mùi độc hại, hiệu quả xử lý cao nhất."
      },
      {
        "key": "C",
        "text": "Chi phí thấp, hiệu quả xử lý cao, có thể kết hợp loại bỏ cặn lơ lửng trong nước"
      },
      {
        "key": "D",
        "text": "Hiệu quả xử lý cao, chi phí thấp, thiết bị đơn giản, độ an toàn cao."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 197,
    "question": "Nhược điểm của quá trình khử trùng bằng clo là gì?",
    "options": [
      {
        "key": "A",
        "text": "Tính ăn mòn cao, độc hại cho người vận hành, có thể tái nhiễm khuẩn sau khử trùng."
      },
      {
        "key": "B",
        "text": "Hàm lượng Clo dư quá mức sẽ độc hại đời sống thủy sinh, ăn mòn cao."
      },
      {
        "key": "C",
        "text": "Hàm lượng Clo dư quá mức sẽ độc hại đời sống thủy sinh, ăn mòn cao, tạo sản phẩm trung gian độc hại"
      },
      {
        "key": "D",
        "text": "Clo oxy hóa một số hợp chất hữu cơ tạo ra chất trung gian gây nguy hiểm,chi phí cao"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 198,
    "question": "Khử trùng bằng tia tử ngoại dùng các tia sóng với các bước sóng nào.",
    "options": [
      {
        "key": "A",
        "text": "200 - 295 nm"
      },
      {
        "key": "B",
        "text": "200 - 400 nm"
      },
      {
        "key": "C",
        "text": "400 - 800 nm"
      },
      {
        "key": "D",
        "text": "< 400 nm"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 199,
    "question": "Khử trùng bằng tia tử ngọai dùng các tia sóng ở bước sóng bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "Từ 420 - 455 nm"
      },
      {
        "key": "B",
        "text": "Từ 200 - 295 nm"
      },
      {
        "key": "C",
        "text": "Từ 195 - 255 nm"
      },
      {
        "key": "D",
        "text": "Từ 155 - 195 nm"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 200,
    "question": "Mệnh đề nào đúng về đặc tính khử trùng bằng Clo?",
    "options": [
      {
        "key": "A",
        "text": "Phương pháp này thân thiện với môi trường và con người."
      },
      {
        "key": "B",
        "text": "Chi phí xử lý thấp, phản ứng có thể tạo ra tủa sắt, mangan."
      },
      {
        "key": "C",
        "text": "Chi phí xử lý cao, tốn kém hóa chất, gây ô nhiễm môi trường."
      },
      {
        "key": "D",
        "text": "Chi phí xử lý cao, vận hành khó khăn cần trình độ của công nhân cao"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 201,
    "question": "Ozone trong công nghiệp được tạo ra bằng phương pháp nào?",
    "options": [
      {
        "key": "A",
        "text": "Tạo ra bằng cách cho Oxygen đi qua một thiết bị phóng tia lửa điện."
      },
      {
        "key": "B",
        "text": "Được tạo ra bằng cách cho Oxygen tác dụng với không khí."
      },
      {
        "key": "C",
        "text": "Được tạo ra bằng cách phân ly nước rồi sục thêm Oxygen."
      },
      {
        "key": "D",
        "text": "Ozone không thể tạo ra được, chỉ có thể lấy sẵn trong tự nhiên"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 202,
    "question": "Nhược điểm của khử trùng bằng ozone là gì?",
    "options": [
      {
        "key": "A",
        "text": "Vốn đầu tư ban đầu cao, hiệu suất tạo Ozone thay đổi thất thường theo khí hậu, gây ô nhiễm môi trường cao."
      },
      {
        "key": "B",
        "text": "Vốn đầu tư ban đầu cao, thời gian khử trùng lâu, giảm DO nước, dư lượng trong nước cao gây hại cho môi trường và con người."
      },
      {
        "key": "C",
        "text": "Vốn đầu tư ban đầu cao, tiêu tốn năng lượng điện, hiệu suất tạo Ozone thấp đặc biệt trong khí hậu nhiệt đới, gây độc cho người vận hành."
      },
      {
        "key": "D",
        "text": "Vốn đầu tư ban đầu cao, tạo ra sản phẩm phụ độc hại, không khử được tốt mùi và màu, dư lượng trong nước cao gây hại cho môi trường và con người"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 203,
    "question": "Ưu điểm của khử trùng bằng ozone là gì?",
    "options": [
      {
        "key": "A",
        "text": "Chi phí thấp, ít tiêu tốn năng lượng điện, hiệu suất tạo Ozone cao trong mọi loại khí hậu."
      },
      {
        "key": "B",
        "text": "Chi phí thấp, thời gian khử trùng nhanh, không có dư lượng tồn dư."
      },
      {
        "key": "C",
        "text": "Chi phí thấp, sản phẩm phụ không độc hại, khử mùi và màu tốt, không có dư lượng tồn dư, hiệu quả xử lý cao."
      },
      {
        "key": "D",
        "text": "Không tạo ra mùi và sản phẩm phụ độc hại, khử mùi và màu tốt, không có dư lượng tồn dư, tăng DO trong nước, thời gian tác dụng nhanh."
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 204,
    "question": "Ozone loại bỏ vi sinh vật như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Quá trình khử trực tiếp phá hủy các tế bào vi sinh, khoáng hóa các chất hữu cơ, tiêu diệt các loại vi sinh vật, vi khuẩn."
      },
      {
        "key": "B",
        "text": "Quá trình khử đã trực tiếp phá hủy toàn bộ vi sinh vật trong nước, không để lại mầm mống vi sinh, hiệu quả xử lý vi sinh rất cao."
      },
      {
        "key": "C",
        "text": "Quá trình oxy hóa trực tiếp phá hủy các tế bào vi sinh, cắt mạch, khoáng hóa hầu hết chất hữu cơ, tiêu diệt vi sinh vật, vi khuẩn."
      },
      {
        "key": "D",
        "text": "Ozone không thể trực tiếp tiêu diệt các tế bào vi sinh, chỉ khoáng hóa các chất hữu cơ để cắt nguồn dinh dưỡng vi sinh"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 205,
    "question": "Những thiết bị nào thường phải có trong nhà clo?",
    "options": [
      {
        "key": "A",
        "text": "Thiết bị phân tích Clo, thiết bị bảo hộ, vật liệu lọC."
      },
      {
        "key": "B",
        "text": "Thiết bị thu mẫu, thiết bị phân tích Clo, bộ khuyếch đại."
      },
      {
        "key": "C",
        "text": "Thiết bị thông gió, thiết bị phân tích Clo, thiết bị bảo hộ."
      },
      {
        "key": "D",
        "text": "Thiết bị thu mẫu, thiết bị phân tích Clo, thiết bị điều khiển ánh sáng"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 206,
    "question": "Nước cứng được định nghĩa chính xác là gì?",
    "options": [
      {
        "key": "A",
        "text": "Nước chứa nhiều ion Ca 2+ và Mg2+."
      },
      {
        "key": "B",
        "text": "Nước cứng là nước làm xà phòng không tạo bọt."
      },
      {
        "key": "C",
        "text": "Nước cứng là nước chứa nhiều kim loại"
      },
      {
        "key": "D",
        "text": "Nước chứa nhiều ion đa hóa trị."
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 207,
    "question": "Độ cứng tổng cộng được xác định như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Tổng nồng độ kim loại trong nước"
      },
      {
        "key": "B",
        "text": "Tổng nồng độ Ca2+, Mg2+, Fe2+, Mn2+"
      },
      {
        "key": "C",
        "text": "Tổng nồng độ anion và cation trong nước"
      },
      {
        "key": "D",
        "text": "Tổng nồng độ Ca2+ và Mg2+"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 208,
    "question": "Trong nước mặt, sắt tồn tại ở trạng thái nào?",
    "options": [
      {
        "key": "A",
        "text": "Hợp chất ở dạng Fe2+"
      },
      {
        "key": "B",
        "text": "Sắt ở dạng kim loại"
      },
      {
        "key": "C",
        "text": "Hợp chất ở dạng Fe3+"
      },
      {
        "key": "D",
        "text": "Sắt hầu hết ở dạng hòa tan"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 209,
    "question": "Trong nước ngầm, sắt tồn tại ở trạng thái nào?",
    "options": [
      {
        "key": "A",
        "text": "Hợp chất ở dạng Fe3+"
      },
      {
        "key": "B",
        "text": "Sắt ở dạng kim loại"
      },
      {
        "key": "C",
        "text": "Sắt hầu hết ở dạng kết tủa"
      },
      {
        "key": "D",
        "text": "Hợp chất ở dạng Fe2+"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 210,
    "question": "Dấu hiệu nào nhận biết trong nước ngầm có hàm lượng sắt cao?",
    "options": [
      {
        "key": "A",
        "text": "Nước có cặn bẩn màu nâu đỏ"
      },
      {
        "key": "B",
        "text": "Nước có váng nổi"
      },
      {
        "key": "C",
        "text": "Nước có cặn màu xám đen"
      },
      {
        "key": "D",
        "text": "Nước có mùi tanh"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 211,
    "question": "Trong nước ngầm, Mn thường tồn tại ở trạng thái nào?",
    "options": [
      {
        "key": "A",
        "text": "Mn4+, Mn2+"
      },
      {
        "key": "B",
        "text": "Cặn rắn"
      },
      {
        "key": "C",
        "text": "Mn4+"
      },
      {
        "key": "D",
        "text": "Mn2+"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 212,
    "question": "Đối với nước ngầm khi làm thoáng, nồng độ oxy và CO2 trong nước sẽ thay đổi như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Nồng độ oxy sẽ giảm và nồng độ CO2 sẽ tăng lên."
      },
      {
        "key": "B",
        "text": "Nồng độ oxy sẽ tăng và nồng độ CO2 không đổi."
      },
      {
        "key": "C",
        "text": "Nồng độ oxy không đổi và nồng độ CO2 sẽ giảm"
      },
      {
        "key": "D",
        "text": "Nồng độ oxy sẽ tăng lên và nồng độ CO2 sẽ giảm."
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 213,
    "question": "Mục đích của công trình làm thoáng khử sắt là gì?",
    "options": [
      {
        "key": "A",
        "text": "Giảm pH, tăng lượng oxy, khử khí"
      },
      {
        "key": "B",
        "text": "Ổn định pH, tăng lượng oxy, khử khí"
      },
      {
        "key": "C",
        "text": "Nâng pH, tăng lượng oxy, khử khí"
      },
      {
        "key": "D",
        "text": "Nâng pH, ổn định lượng oxy, khử khí"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 214,
    "question": "Dựa vào dấu hiệu nào sau đây để nhận biết nước bị nhiễm mangan ?",
    "options": [
      {
        "key": "A",
        "text": "Nước không có màu, không có mùi tanh, lớp cặn có màu đen, thường bám vào đáy và thành bồn chứa."
      },
      {
        "key": "B",
        "text": "Nước có màu đục, mùi tanh khó chịu, lớp cặn có màu vàng, ít bám vào đáy và thành bồn chứa."
      },
      {
        "key": "C",
        "text": "Nước có màu đục, mùi tanh khó chịu, lớp cặn có màu vàng, ít bám vào đáy và thành bồn chứa."
      },
      {
        "key": "D",
        "text": "Nước có màu đục, mùi tanh khó chịu, lớp cặn có màu đen, thường bám vào đáy và thành bồn chứa."
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 215,
    "question": "Nhiệm vụ của bể phản ứng sau giàn mưa là gì?",
    "options": [
      {
        "key": "A",
        "text": "Nơi hòa trộn hóa chất và lắng cặn."
      },
      {
        "key": "B",
        "text": "Chỉ oxy hóa sắt và mangan."
      },
      {
        "key": "C",
        "text": "Chỉ nâng pH và tạo điều hòa lưu lượng nước"
      },
      {
        "key": "D",
        "text": "Nơi hòa trộn hóa chất và phản ứng khử sắt."
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 216,
    "question": "Để khử sắt và mangan bằng công nghệ làm thoáng kết hợp chlorine cho các nhà cấp nước thành phố, những loại hóa chất nào phải được sử dụng?",
    "options": [
      {
        "key": "A",
        "text": "Xút, Cl2"
      },
      {
        "key": "B",
        "text": "Cl2, polime"
      },
      {
        "key": "C",
        "text": "Vôi, Cl2"
      },
      {
        "key": "D",
        "text": "Xút, polime"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 217,
    "question": "Để khử mangan bằng phương pháp làm thoáng, thành phần nào phải được bổ sung?",
    "options": [
      {
        "key": "A",
        "text": "Chất acid hóa"
      },
      {
        "key": "B",
        "text": "MnO2"
      },
      {
        "key": "C",
        "text": "Cl2"
      },
      {
        "key": "D",
        "text": "Chất kiềm hóa"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 218,
    "question": "Để khử mangan bằng Chlorine, thành phần nào phải được bổ sung?",
    "options": [
      {
        "key": "A",
        "text": "Chất acid hóa"
      },
      {
        "key": "B",
        "text": "MnO2"
      },
      {
        "key": "C",
        "text": "Cl2"
      },
      {
        "key": "D",
        "text": "Chất kiềm hóa"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 219,
    "question": "Mangan trong nước cấp sẽ bị kết tủa ở dạng nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Mn(OH)2"
      },
      {
        "key": "B",
        "text": "Mn"
      },
      {
        "key": "C",
        "text": "MnCO3"
      },
      {
        "key": "D",
        "text": "MnO2"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 220,
    "question": "Chọn phát biểu chưa chính xáC. Nước thải công nghiệp là:",
    "options": [
      {
        "key": "A",
        "text": "Là loại nước từ khai thác và chế biến các nguyên liệu hữu cơ và vô cơ đến thải ra sau quá trình sản xuất"
      },
      {
        "key": "B",
        "text": "Thường có lưu lượng lớn"
      },
      {
        "key": "C",
        "text": "Là nước dùng để hòa tan và hình thành bùn khi làm giàu và chế biến quặng, vận chuyển sản phẩm và chất thải sản xuất"
      },
      {
        "key": "D",
        "text": "Thường có nồng độ các chất ô nhiễm cao"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 221,
    "question": "Chọn phát biểu chính xáC. Tính chất nước thải được thể hiện qua:",
    "options": [
      {
        "key": "A",
        "text": "Tính chất vật lý, Tính chất hóa học, Tính phản ứng"
      },
      {
        "key": "B",
        "text": "Tính chất hóa học, Tính chất sinh học, Tính phản ứng"
      },
      {
        "key": "C",
        "text": "Tính chất vật lý, Tính chất sinh học, Tính phản ứng"
      },
      {
        "key": "D",
        "text": "Tính chất vật lý, Tính chất hóa học, Tính chất sinh học"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 222,
    "question": "Chọn phát biểu chính xáC. TSS là:",
    "options": [
      {
        "key": "A",
        "text": "Tổng chất rắn bay hơi"
      },
      {
        "key": "B",
        "text": "Tổng chất rắn"
      },
      {
        "key": "C",
        "text": "Tổng chất rắn lơ lửng"
      },
      {
        "key": "D",
        "text": "Tổng chất rắn hoà tan bay hơi"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 223,
    "question": "Chọn phát biểu chưa chính xác về BOD5:",
    "options": [
      {
        "key": "A",
        "text": "Là nhu cầu oxy sinh hoá trong 5 ngày"
      },
      {
        "key": "B",
        "text": "Là lượng oxy cần thiết để ổn định sinh học chất thải"
      },
      {
        "key": "C",
        "text": "Là nhu cầu oxy sinh hoá cacbon cuối cùng"
      },
      {
        "key": "D",
        "text": "Đánh giá được hàm lượng chất hữu cơ dễ phân hủy có trong nước thải"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 224,
    "question": "Chọn đáp án chưa chính xác:",
    "options": [
      {
        "key": "A",
        "text": "BOD là nhu cầu oxy sinh hoá."
      },
      {
        "key": "B",
        "text": "BOD/COD < 1 thì lựa chọn phương pháp hoá học là phương pháp chính để xử lý nước thải"
      },
      {
        "key": "C",
        "text": "BOD < COD (cùng 1 mẫu nước)"
      },
      {
        "key": "D",
        "text": "COD là nhu cầu oxy hoá họC."
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 225,
    "question": "Chọn phát biểu chính xáC. Đơn vị của BOD là:",
    "options": [
      {
        "key": "A",
        "text": "mg CaCO3/L"
      },
      {
        "key": "B",
        "text": "Pt-Co"
      },
      {
        "key": "C",
        "text": "mg O2/L"
      },
      {
        "key": "D",
        "text": "NTU"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 226,
    "question": "Chọn đáp án chưa chính xác",
    "options": [
      {
        "key": "A",
        "text": "Thông số COD là nhu cầu oxy hóa học"
      },
      {
        "key": "B",
        "text": "Thông số BOD là nhu cầu oxy sinh học"
      },
      {
        "key": "C",
        "text": "Thông số COD đánh giá hàm lượng chất hữu cơ dễ phân hủy có trong nước thải"
      },
      {
        "key": "D",
        "text": "Đơn vị của COD và BOD là mg O2/L"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 227,
    "question": "Chọn phát biểu chính xáC. Đơn vị của COD là:",
    "options": [
      {
        "key": "A",
        "text": "mg CaCO3/L"
      },
      {
        "key": "B",
        "text": "Pt-Co"
      },
      {
        "key": "C",
        "text": "NTU"
      },
      {
        "key": "D",
        "text": "mg O2/L"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 228,
    "question": "Chọn đáp án chính xáC. Thông số nào sau đây không thuộc tính chất hóa học vô cơ trong quá trình đánh giá tính chất nước thải:",
    "options": [
      {
        "key": "A",
        "text": "Ammonia"
      },
      {
        "key": "B",
        "text": "Độ kiềm"
      },
      {
        "key": "C",
        "text": "Tổng chất rắn"
      },
      {
        "key": "D",
        "text": "pH"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 229,
    "question": "Chọn đáp án chính xáC. Thông số nào sau đây không thuộc tính chất vật lý trong quá trình đánh giá tính chất nước thải:",
    "options": [
      {
        "key": "A",
        "text": "Tổng chất rắn"
      },
      {
        "key": "B",
        "text": "Độ đục"
      },
      {
        "key": "C",
        "text": "Độ kiềm"
      },
      {
        "key": "D",
        "text": "Độ dẫn điện"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 230,
    "question": "Chọn đáp án chính xáC. Thông số nào sau đây không thuộc tính chất hóa học hữu cơ trong quá trình đánh giá tính chất nước thải:",
    "options": [
      {
        "key": "A",
        "text": "Nhu cầu oxy sinh hoá carbon 5 ngày"
      },
      {
        "key": "B",
        "text": "Nhu cầu oxy nitơ"
      },
      {
        "key": "C",
        "text": "Nitơ hữu cơ"
      },
      {
        "key": "D",
        "text": "Nhu cầu oxy hoá học"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 231,
    "question": "Chọn đáp án chính xáC. Thông số nào sau đây không thuộc tính chất sinh học trong quá trình đánh giá tính chất nước thải:",
    "options": [
      {
        "key": "A",
        "text": "Nhu cầu oxy sinh hoá"
      },
      {
        "key": "B",
        "text": "Nhu cầu oxy nitơ"
      },
      {
        "key": "C",
        "text": "Coliform"
      },
      {
        "key": "D",
        "text": "Nhu cầu oxy sinh hoá cacbon cuối cùng"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 232,
    "question": "Chọn đáp án chính xáC. Thông số nào sau đây không thuộc tính chất vật lý trong quá trình đánh giá tính chất nước thải:",
    "options": [
      {
        "key": "A",
        "text": "Tổng chất rắn lơ lững"
      },
      {
        "key": "B",
        "text": "Nhiệt độ"
      },
      {
        "key": "C",
        "text": "Độ cứng"
      },
      {
        "key": "D",
        "text": "Độ màu"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 233,
    "question": "Chọn đáp án chính xáC. Thông số nào sau đây không thuộc tính chất hóa học vô cơ của nước thải:",
    "options": [
      {
        "key": "A",
        "text": "Tổng nitơ"
      },
      {
        "key": "B",
        "text": "Độ kiềm"
      },
      {
        "key": "C",
        "text": "Độ đục"
      },
      {
        "key": "D",
        "text": "Độ axít"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 234,
    "question": "Chọn đáp án chính xáC. Quy chuẩn kỹ thuật quốc gia về nước thải công nghiệp chế biến thủy sản do cơ quan nào ban hành:",
    "options": [
      {
        "key": "A",
        "text": "Bộ Tài nguyên và Môi trường"
      },
      {
        "key": "B",
        "text": "Bộ Công Thương"
      },
      {
        "key": "C",
        "text": "Bộ Y tế"
      },
      {
        "key": "D",
        "text": "Bộ Khoa học và Công nghệ"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 235,
    "question": "Chọn đáp án chính xáC. Quy chuẩn kỹ thuật quốc gia về nước thải công nghiệp chế biến thủy sản là:",
    "options": [
      {
        "key": "A",
        "text": "QCVN 11-MT:2015/BTNMT"
      },
      {
        "key": "B",
        "text": "QCVN 40:2011/BTNMT"
      },
      {
        "key": "C",
        "text": "QCVN 14:2008/BTNMT"
      },
      {
        "key": "D",
        "text": "QCVN 62:2015/BTNMT"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 236,
    "question": "Chọn đáp án chính xáC. Quy chuẩn kỹ thuật quốc gia về nước thải công nghiệp là:",
    "options": [
      {
        "key": "A",
        "text": "QCVN 14:2008/BTNMT"
      },
      {
        "key": "B",
        "text": "QCVN 19:2011/BTNMT"
      },
      {
        "key": "C",
        "text": "QCVN 40:2011/BTNMT"
      },
      {
        "key": "D",
        "text": "QCVN 11:2008/BTNMT"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 237,
    "question": "Chọn đáp án chính xáC. Quy chuẩn kỹ thuật quốc gia về nước thải sinh hoạt là:",
    "options": [
      {
        "key": "A",
        "text": "QCVN 19:2011/BTNMT"
      },
      {
        "key": "B",
        "text": "QCVN 11:2008/BTNMT"
      },
      {
        "key": "C",
        "text": "QCVN 62:2015/BTNMT"
      },
      {
        "key": "D",
        "text": "QCVN 14:2008/BTNMT"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 238,
    "question": "Nước thải chứa nhiều Nitơ (N) và PhốtPho (P) sẽ dẫn đến điều gì?",
    "options": [
      {
        "key": "A",
        "text": "Ăn mòn đường ống"
      },
      {
        "key": "B",
        "text": "Tắc đường ống"
      },
      {
        "key": "C",
        "text": "Hiện tượng phú dưỡng hóa (rong rêu, tảo phát triển)"
      },
      {
        "key": "D",
        "text": "Lắng đọng nguồn tiếp nhận"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 239,
    "question": "Mục đích chính của quá trình xử lý cơ học là gì?",
    "options": [
      {
        "key": "A",
        "text": "Làm cho đường ống không bị ăn mòn"
      },
      {
        "key": "B",
        "text": "Giảm độ axit của nước"
      },
      {
        "key": "C",
        "text": "Loại bỏ các tạp chất không tan như: rác, cát, nhựa,…"
      },
      {
        "key": "D",
        "text": "Làm cho nước sạch"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 240,
    "question": "Chức năng chính của bể điều hòa là gì?",
    "options": [
      {
        "key": "A",
        "text": "Chứa nước"
      },
      {
        "key": "B",
        "text": "Để nâng pH"
      },
      {
        "key": "C",
        "text": "Điều hòa lưu lượng và nồng độ các chất bẩn có trong nước thải"
      },
      {
        "key": "D",
        "text": "Xử lý chất ô nhiễm trong nước thải"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 241,
    "question": "Xử lý hóa học/hóa lý bao gồm?",
    "options": [
      {
        "key": "A",
        "text": "Trung hòa, oxy hóa khử, lắng, lọc"
      },
      {
        "key": "B",
        "text": "Trung hòa, oxy hóa khử, keo tụ tạo bông, hấp phụ, trao đổi Ion, Sinh học"
      },
      {
        "key": "C",
        "text": "Trung hòa, oxy hóa khử, keo tụ tạo bông, hấp phụ, trao đổi Ion"
      },
      {
        "key": "D",
        "text": "Trung hòa, oxy hóa khử, keo tụ tạo bông, hấp phụ, trao đổi Ion, Sinh học và lắng"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 242,
    "question": "Nước thải có (tính axit) pH nằm trong khoảng nào?",
    "options": [
      {
        "key": "A",
        "text": "1 - 7"
      },
      {
        "key": "B",
        "text": "6 - 9"
      },
      {
        "key": "C",
        "text": "7 - 14"
      },
      {
        "key": "D",
        "text": "4 - 9"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 243,
    "question": "Nước thải có tính bazo (tính Kiềm) pH nằm trong khoảng nào?",
    "options": [
      {
        "key": "A",
        "text": "7 - 14"
      },
      {
        "key": "B",
        "text": "1 - 7"
      },
      {
        "key": "C",
        "text": "3 -8"
      },
      {
        "key": "D",
        "text": "5 - 9"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 244,
    "question": "Nước thải có tính axit được trung hòa bằng cách cho thêm vào?",
    "options": [
      {
        "key": "A",
        "text": "H2SO4"
      },
      {
        "key": "B",
        "text": "PAC"
      },
      {
        "key": "C",
        "text": "CaOCl2"
      },
      {
        "key": "D",
        "text": "NaOH"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 245,
    "question": "Nước thải có tính bazơ được trung hòa bằng cách cho thêm?",
    "options": [
      {
        "key": "A",
        "text": "NaOCl"
      },
      {
        "key": "B",
        "text": "CaOCl2"
      },
      {
        "key": "C",
        "text": "H2SO4"
      },
      {
        "key": "D",
        "text": "Polymer"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 246,
    "question": "Hóa chất thường để sử dụng trong quá trình keo tụ tạo bông là:",
    "options": [
      {
        "key": "A",
        "text": "HCl"
      },
      {
        "key": "B",
        "text": "NaCl"
      },
      {
        "key": "C",
        "text": "Clorine"
      },
      {
        "key": "D",
        "text": "PAC, Phèn nhôm, phèn sắt"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 247,
    "question": "Quá trình xử lý sinh học hiếu khí là?",
    "options": [
      {
        "key": "A",
        "text": "Quá trình phân hủy chất hữu cơ dưới điều kiện không có Oxy"
      },
      {
        "key": "B",
        "text": "Quá trình phân hủy chất hữu cơ dưới điều kiện có Oxy hoặc không có oxy"
      },
      {
        "key": "C",
        "text": "Quá trình phân hủy chất dinh dưỡng dưới điều kiện không có Oxy"
      },
      {
        "key": "D",
        "text": "Quá trình phân hủy chất hữu cơ dưới điều kiện có Oxy"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 248,
    "question": "Quá trình khử trùng nước thải nhằm mục đích?",
    "options": [
      {
        "key": "A",
        "text": "Giảm cặn nước thải"
      },
      {
        "key": "B",
        "text": "Tiêu diệt vi khuẩn gây bệnh"
      },
      {
        "key": "C",
        "text": "Khử mùi trong nước"
      },
      {
        "key": "D",
        "text": "Khử màu và chất độc trong nước"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 249,
    "question": "Hóa chất sử dụng trong quá trình khử trùng là?",
    "options": [
      {
        "key": "A",
        "text": "Javen"
      },
      {
        "key": "B",
        "text": "NaOH"
      },
      {
        "key": "C",
        "text": "NaCl"
      },
      {
        "key": "D",
        "text": "HCl"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 250,
    "question": "Chỉ tiêu DO có nghĩa là:",
    "options": [
      {
        "key": "A",
        "text": "Lượng oxy hoà tan trong 100 mL nước"
      },
      {
        "key": "B",
        "text": "Lượng oxy cần để oxy hoá hết lượng chất hữu cơ"
      },
      {
        "key": "C",
        "text": "Lượng oxy hoà tan cần dùng để xử lý nước"
      },
      {
        "key": "D",
        "text": "Lượng oxy hoà tan trong nước"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 251,
    "question": "Trước bể keo tụ thường phải cho axit hoặc bazơ là để:",
    "options": [
      {
        "key": "A",
        "text": "Acid cũng là tác nhân keo tụ"
      },
      {
        "key": "B",
        "text": "Trung hoà nước"
      },
      {
        "key": "C",
        "text": "Trung hòa, tác nhân keo tụ, tạo pH thích hợp"
      },
      {
        "key": "D",
        "text": "Tạo pH thích hợp"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 252,
    "question": "Song chắn rác được sử dụng trong hệ thống xử lý nước thải nhằm:",
    "options": [
      {
        "key": "A",
        "text": "Tận thu các thành phần hữu ích trong nước thải"
      },
      {
        "key": "B",
        "text": "Loại bỏ rác có kích thước lớn, tránh hư hỏng bơm và đường ống"
      },
      {
        "key": "C",
        "text": "Loại bỏ SS trong nước thải"
      },
      {
        "key": "D",
        "text": "Loại bỏ chất hữu cơ mạch dài"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 253,
    "question": "Các biện pháp sinh học được dùng để xử lý nước thải khi:",
    "options": [
      {
        "key": "A",
        "text": "Nước chứa nhiều chất hữu cơ"
      },
      {
        "key": "B",
        "text": "Nước có nhiều chất lơ lửng"
      },
      {
        "key": "C",
        "text": "Tỷ số BOD/COD > 0,5"
      },
      {
        "key": "D",
        "text": "Nước bị ô nhiễm kim loại nặng"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 254,
    "question": "Công trình nào sau đây là bể xử lý sinh học hiếu khí dùng cho xử lý nước thải:",
    "options": [
      {
        "key": "A",
        "text": "Bể Aerotank"
      },
      {
        "key": "B",
        "text": "Bể UASB"
      },
      {
        "key": "C",
        "text": "Bể tự hoại"
      },
      {
        "key": "D",
        "text": "Bể anoxic"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 255,
    "question": "Để lựa chọn công nghệ xử lý nước thải, phải chú ý đến yếu tố nào nhiều nhất:",
    "options": [
      {
        "key": "A",
        "text": "Thành phần nước thải, mức độ cần thiết phải xử lý"
      },
      {
        "key": "B",
        "text": "Khí tượng thuỷ văn và chất lượng nước ngầm"
      },
      {
        "key": "C",
        "text": "Các thông tin về tầng khí quyển"
      },
      {
        "key": "D",
        "text": "Nhu cầu dùng nước"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 256,
    "question": "Công trình sinh học kỵ khí thường được đặt ở vị trí nào trong hệ thống xử lý nước thải?",
    "options": [
      {
        "key": "A",
        "text": "Trước xử lý hiếu khí"
      },
      {
        "key": "B",
        "text": "Sau xử lý hiếu khí"
      },
      {
        "key": "C",
        "text": "Trước song chắn rác"
      },
      {
        "key": "D",
        "text": "Sau khử trùng"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 257,
    "question": "Trao đổi ion thường được dùng để khử chất ô nhiễm nào trong nước:",
    "options": [
      {
        "key": "A",
        "text": "Các ion kim loại trong nước"
      },
      {
        "key": "B",
        "text": "Chất lở lửng trong nước"
      },
      {
        "key": "C",
        "text": "Các chất hữu cơ trong nước"
      },
      {
        "key": "D",
        "text": "Vi khuẩn gây bệnh trong nước"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 258,
    "question": "Công trình nào sau đây là bể xử lý sinh học thiếu khí:",
    "options": [
      {
        "key": "A",
        "text": "SBR"
      },
      {
        "key": "B",
        "text": "Bể UASB"
      },
      {
        "key": "C",
        "text": "Bể tự hoại"
      },
      {
        "key": "D",
        "text": "Lọc ngầm"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 259,
    "question": "Vật liệu lọc trong bể lọc sinh học xử lý nước thải có nhiệm vụ:",
    "options": [
      {
        "key": "A",
        "text": "Làm giá thể cho vi sinh vật dính bám"
      },
      {
        "key": "B",
        "text": "Làm giá thể và làm nguồn chất dinh dưỡng cho vi sinh"
      },
      {
        "key": "C",
        "text": "Làm giá thể cho vi sinh bám dính và lọc cơ học các cặn lơ lửng"
      },
      {
        "key": "D",
        "text": "Làm giá thể cho vi sinh và điều tiết dòng chảy"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 260,
    "question": "Công trình lắng sơ bộ được sử dụng trong trường hợp nào:",
    "options": [
      {
        "key": "A",
        "text": "Lưu lượng dòng nước thải vào lớn"
      },
      {
        "key": "B",
        "text": "Nước thải đầu vào có nhiều cặn"
      },
      {
        "key": "C",
        "text": "Nước thải đầu vào có màu"
      },
      {
        "key": "D",
        "text": "Trước bể lắng sơ bộ có bể keo tụ tạo bông"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 261,
    "question": "Tỷ số F/M được hiểu là:",
    "options": [
      {
        "key": "A",
        "text": "Tỷ số giữa lượng vi sinh vật và lượng thức ăn"
      },
      {
        "key": "B",
        "text": "Tỷ số giữa lượng chất dinh dưỡng vi lượng và lượng thức ăn"
      },
      {
        "key": "C",
        "text": "Tỷ số giữa thức ăn và lượng vi sinh vật"
      },
      {
        "key": "D",
        "text": "Tỷ số giữa lượng chất dinh dưỡng vi lượng và lượng vi sinh vật"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 262,
    "question": "Chọn phát biểu đúng:",
    "options": [
      {
        "key": "A",
        "text": "Trong trạm xử lý nước thải, bể gom nước thải có thể đặt chìm dưới mặt đất"
      },
      {
        "key": "B",
        "text": "Trong trạm xử lý nước thải, bể gom nước thải có thể đặt cao hơn mặt đất"
      },
      {
        "key": "C",
        "text": "Trong trạm xử lý nước thải, bể gom nước thải phải được đặt cao hơn mặt đất"
      },
      {
        "key": "D",
        "text": "Trong trạm xử lý nước thải, bể gom nước thải phải đặt chìm dưới mặt đất"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 263,
    "question": "Ưu điểm nổi trội của biện pháp xử lý sinh học là:",
    "options": [
      {
        "key": "A",
        "text": "Hiệu quả cao"
      },
      {
        "key": "B",
        "text": "Thời gian xử lý nhanh"
      },
      {
        "key": "C",
        "text": "Chi phí xử lý thấp"
      },
      {
        "key": "D",
        "text": "Diện tích mặt bằng nhỏ"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 264,
    "question": "Các vùng hoạt động của bể lắng trong xử lý nước thải được sắp xếp theo thứ tự sau:",
    "options": [
      {
        "key": "A",
        "text": "Vùng vào - vùng chuyển dòng - vùng lắng - vùng ra"
      },
      {
        "key": "B",
        "text": "Vùng chuyển dòng - vùng vào - vùng lắng - vùng ra"
      },
      {
        "key": "C",
        "text": "Vùng chuyển dòng - vùng tách dầu mỡ - vùng lắng - vùng ra"
      },
      {
        "key": "D",
        "text": "Vùng vào - vùng lắng - vùng chứa cặn - vùng ra"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 265,
    "question": "Trong trường hợp nước thải có nhiều chất hữu cơ khó phân hủy ở trạng thái hòa tan thì có thể xử lý bằng phương pháp:",
    "options": [
      {
        "key": "A",
        "text": "Trao đổi ion"
      },
      {
        "key": "B",
        "text": "Oxy hóa"
      },
      {
        "key": "C",
        "text": "Aerotank"
      },
      {
        "key": "D",
        "text": "Keo tụ bằng phèn nhôm"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 266,
    "question": "Bùn hoạt tính trong bể lắng 2 không lắng được có thể do nguyên nhân nào sau đây:",
    "options": [
      {
        "key": "A",
        "text": "Thời gian lưu quá dài làm xuất hiện hiện tượng khử nitơ"
      },
      {
        "key": "B",
        "text": "Hệ thống cào bùn quá chậm làm bùn không lắng"
      },
      {
        "key": "C",
        "text": "Bùn chứa nhiều nguyên sinh động vật"
      },
      {
        "key": "D",
        "text": "Bùn có nhiều chất béo làm giảm khối lượng riêng của bùn"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 267,
    "question": "Chọn công nghệ xử lý nước thải thích hợp cho nhà máy sản xuất bia với COD = 800 mg/L; SS = 300mg/L:",
    "options": [
      {
        "key": "A",
        "text": "Lưới chắn rác → hố thu → Bể điều hòa → UASB → bể lọc hiếu khí → bể lắng 2 → bể khử trùng"
      },
      {
        "key": "B",
        "text": "Lưới chắn rác → hố thu → bể điều hòa → bể lắng 1 → bể lọc hiếu khí → bể lắng 2 → bể khử trùng"
      },
      {
        "key": "C",
        "text": "Lưới chắn rác → hố thu → bể anoxic → bể lắng 1 → bể lọc hiếu khí → bể lắng 2 → bể khử trùng"
      },
      {
        "key": "D",
        "text": "Lưới chắn rác → hố thu → bể điều hòa → bể SBR → bể lắng 2 → bể khử trùng"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 268,
    "question": "Nguyên nhân gây ra lượng chất hữu cơ cao trong nước thải sản xuất bia là:",
    "options": [
      {
        "key": "A",
        "text": "Bia dư"
      },
      {
        "key": "B",
        "text": "Ngâm malt"
      },
      {
        "key": "C",
        "text": "Bã hèm sinh ra trong quá trình nấu"
      },
      {
        "key": "D",
        "text": "Lọc malt"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 269,
    "question": "Chọn phát biểu chính xáC. TKN là:",
    "options": [
      {
        "key": "A",
        "text": "N- ammoniac và N-ammonium"
      },
      {
        "key": "B",
        "text": "N-Ammonia và N-hữu cơ"
      },
      {
        "key": "C",
        "text": "N-hữu cơ."
      },
      {
        "key": "D",
        "text": "N-nitrit và N-nitrat."
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 270,
    "question": "Chọn đáp án chưa chính xáC. Việc xuất hiện các chất nổi trên mặt nước hoặc có cặn lắng do nước thải ra từ quá trình chế biến thực phẩm sẽ:",
    "options": [
      {
        "key": "A",
        "text": "Làm cho nước có mùi vị đặc trưng"
      },
      {
        "key": "B",
        "text": "Làm giảm lượng oxy trong nước nguồn"
      },
      {
        "key": "C",
        "text": "Làm cho môi trường nước có tính axit"
      },
      {
        "key": "D",
        "text": "Cản trở dòng chảy ảnh hưỡng đến môi trường thủy vực"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 271,
    "question": "(CLO3.1) Chọn đáp án chưa chính xáC. Thành phần, tính chất nước thải chế biến thực phẩm có:",
    "options": [
      {
        "key": "A",
        "text": "Chứa các hợp chất hữu cơ (thường ít độc) có nguồn gốc từ động vật và thực vật"
      },
      {
        "key": "B",
        "text": "Chất thải hữu cơ có nguồn gốc từ thực vật chủ yếu là cacbonhydrat"
      },
      {
        "key": "C",
        "text": "Nồng độ TSS thấp"
      },
      {
        "key": "D",
        "text": "Chất thải có nguồn gốc động vật có thành phần chủ yếu là protein và chất béo"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 272,
    "question": "Thông số nào sau đây không đưa ra giá trị giới hạn cho phép xả thải trong Quy chuẩn kỹ thuật quốc gia về nước thải sinh hoạt:",
    "options": [
      {
        "key": "A",
        "text": "BOD"
      },
      {
        "key": "B",
        "text": "Tổng coliform"
      },
      {
        "key": "C",
        "text": "COD"
      },
      {
        "key": "D",
        "text": "Tổng chất rắn lơ lửng"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 273,
    "question": "Mục đích chính của quá trình keo tụ - tạo bông là gì?",
    "options": [
      {
        "key": "A",
        "text": "Giảm nồng độ chất dinh dưỡng"
      },
      {
        "key": "B",
        "text": "Giảm nồng độ vi sinh gây bệnh."
      },
      {
        "key": "C",
        "text": "Giảm pH của nước thải"
      },
      {
        "key": "D",
        "text": "Tăng nhanh quá trình lắng các chất lơ lửng phân tán nhỏ"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 274,
    "question": "Quá trình xử lý sinh học kỵ khí là?",
    "options": [
      {
        "key": "A",
        "text": "Quá trình phân hủy chất hữu cơ thành chất khí CH4 và CO2 dưới điều kiện có Oxy"
      },
      {
        "key": "B",
        "text": "Quá trình phân hủy chất hữu cơ thành chất khí CH4 dưới điều kiện có Oxy"
      },
      {
        "key": "C",
        "text": "Quá trình phân hủy chất hữu cơ thành chất khí CO2 dưới điều kiện không có Oxy"
      },
      {
        "key": "D",
        "text": "Quá trình phân hủy chất hữu cơ thành chất khí CH4 và CO2 dưới điều kiện không có Oxy"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 275,
    "question": "Nồng độ pH trong nước thải trước khi vào bể sinh học cần điều chỉnh trong khoảng?",
    "options": [
      {
        "key": "A",
        "text": "3 - 5"
      },
      {
        "key": "B",
        "text": "9 - 14"
      },
      {
        "key": "C",
        "text": "6 - 8"
      },
      {
        "key": "D",
        "text": "2 - 13"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 276,
    "question": "Tại bể sinh học hiếu khí nhu cầu dinh dưỡng để cho vi sinh sống và phát triển thì các tỷ lệ chất hữu cơ (BOD), tổng Nitơ (N), tồng Phốtpho (P) cần?",
    "options": [
      {
        "key": "A",
        "text": "BOD:N:P = 400:1:5"
      },
      {
        "key": "B",
        "text": "BOD:N:P = 100:5:1"
      },
      {
        "key": "C",
        "text": "BOD:N:P = 250:1:5"
      },
      {
        "key": "D",
        "text": "BOD:N:P = 250:5:1"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 277,
    "question": "Mục đích của quá trình sục khí tại bể điều hòa làm gì?",
    "options": [
      {
        "key": "A",
        "text": "Trộn cho nước tiếp xúc với hóa chất"
      },
      {
        "key": "B",
        "text": "Cung cấp oxy cho nước"
      },
      {
        "key": "C",
        "text": "Tránh cặn lắng, oxy hóa một phần chất hữu cơ, tạo điều kiện thuận lợi cho quá trình xử lý sinh học"
      },
      {
        "key": "D",
        "text": "Cung cấp oxy nuôi vi sinh"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 278,
    "question": "Nitơ trong nước thường được khử bằng phương pháp nào dưới dây:",
    "options": [
      {
        "key": "A",
        "text": "Hoá học"
      },
      {
        "key": "B",
        "text": "Sinh học kỵ khí"
      },
      {
        "key": "C",
        "text": "Sinh học hiếu khí"
      },
      {
        "key": "D",
        "text": "Sinh học thiếu khí"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 279,
    "question": "Tốc độ khuấy của quá trình tạo bông giảm dần là để:",
    "options": [
      {
        "key": "A",
        "text": "Tạo sự tiếp xúc tốt hơn giữa bông cặn và các chất rắn lơ lửng trong nước"
      },
      {
        "key": "B",
        "text": "Làm cho nước tiếp xúc phèn lắng tốt hơn"
      },
      {
        "key": "C",
        "text": "Tạo bông cặn chắc hơn"
      },
      {
        "key": "D",
        "text": "Tạo dòng dịch chuyển lưu chất để xúc tác quá trình keo tụ"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 280,
    "question": "Trong bể aerotank, các muối của nitơ và phốt pho thường được bỏ vào nhằm mục đích:",
    "options": [
      {
        "key": "A",
        "text": "Xúc tác quá trình xử lý sinh học"
      },
      {
        "key": "B",
        "text": "Trung hoà nước thải"
      },
      {
        "key": "C",
        "text": "Bổ sung thành phần dinh dưỡng cho vi sinh vật phát triển"
      },
      {
        "key": "D",
        "text": "Ức chế sự hoạt động của tảo"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 281,
    "question": "Tuần hoàn bùn trong bể aerotank nhằm mục đích gì?",
    "options": [
      {
        "key": "A",
        "text": "Đảm bảo luôn có bùn tốt trong bể"
      },
      {
        "key": "B",
        "text": "Giảm lượng bùn thải"
      },
      {
        "key": "C",
        "text": "Đảm bảo nồng độ bùn thích hợp trong bể"
      },
      {
        "key": "D",
        "text": "Tăng khả năng thích nghi của vi sinh với nước thải"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 282,
    "question": "Bể lọc trong xử lý nước được gọi là bể lọc chậm khi có tính chất nào sau đây:",
    "options": [
      {
        "key": "A",
        "text": "Thời gian rửa lọc lâu"
      },
      {
        "key": "B",
        "text": "Tốc độ lọc chậm"
      },
      {
        "key": "C",
        "text": "Khả năng khử chất bẩn chậm"
      },
      {
        "key": "D",
        "text": "Thời gian hoàn nguyên chậm"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 283,
    "question": "Cường độ quá trình tự làm sạch của nguồn tiếp nhận nước thải không phụ thuộc vào:",
    "options": [
      {
        "key": "A",
        "text": "Vận tốc dòng chảy"
      },
      {
        "key": "B",
        "text": "Nhiệt độ nước sông"
      },
      {
        "key": "C",
        "text": "Cấu trúc địa chất lòng sông"
      },
      {
        "key": "D",
        "text": "Khả năng làm thoáng"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 284,
    "question": "Quá trình sinh học kỵ khí trong xử lý nước thải được chia thành các pha như sau:",
    "options": [
      {
        "key": "A",
        "text": "Acetate hoá - thuỷ phân - acid hoá - đường hoá"
      },
      {
        "key": "B",
        "text": "Thuỷ phân - acid hoá - acetate hoá - metan hoá"
      },
      {
        "key": "C",
        "text": "Thủy phân - metan hoá - acid hoá - acetate hoá"
      },
      {
        "key": "D",
        "text": "Acetate hoá - đường hoá - thuỷ phân - metan hoá"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 285,
    "question": "Cặn thu được ở bể lắng I của hệ thống xử lý nước thải còn được gọi là:",
    "options": [
      {
        "key": "A",
        "text": "Cặn vô cơ"
      },
      {
        "key": "B",
        "text": "Cặn hữu cơ"
      },
      {
        "key": "C",
        "text": "Cặn tươi"
      },
      {
        "key": "D",
        "text": "Cặn thô"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 286,
    "question": "Chất lượng bùn hoạt tính trong bể sinh học hiếu khí được xác định bởi:",
    "options": [
      {
        "key": "A",
        "text": "Bùn lắng nhanh"
      },
      {
        "key": "B",
        "text": "Hàm lượng chất khô trong bùn"
      },
      {
        "key": "C",
        "text": "Lượng chất hữu cơ có khả năng bay hơi"
      },
      {
        "key": "D",
        "text": "Lượng cặn trong nước sau xử lý"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 287,
    "question": "Chọn trật tự đúng nhất trong công nghệ xử lý nước thải:",
    "options": [
      {
        "key": "A",
        "text": "Aerotank - UASB - khử trùng"
      },
      {
        "key": "B",
        "text": "Khử trùng - Aerotank - UASB"
      },
      {
        "key": "C",
        "text": "Aerotank - khử trùng - UASB"
      },
      {
        "key": "D",
        "text": "UASB - Aerotank - khử trùng"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 288,
    "question": "Nước thải sinh hoạt không có đặc tính gì sau đây:",
    "options": [
      {
        "key": "A",
        "text": "Hàm lượng nitơ và phốt pho cao"
      },
      {
        "key": "B",
        "text": "Nhiều vi sinh gây bệnh"
      },
      {
        "key": "C",
        "text": "COD rất cao"
      },
      {
        "key": "D",
        "text": "Chất hoạt động bề mặt cao"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 289,
    "question": "Yếu tố quan trọng ảnh hưởng đến quá trình xử lý kỵ khí là:",
    "options": [
      {
        "key": "A",
        "text": "pH"
      },
      {
        "key": "B",
        "text": "Hàm lượng cặn đầu vào"
      },
      {
        "key": "C",
        "text": "Ánh sáng"
      },
      {
        "key": "D",
        "text": "Tốc độ khí nén"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 290,
    "question": "Hồ sinh học hiếu khí thường được dùng chủ yếu để xử lý chất ô nhiễm nào trong nước thải?",
    "options": [
      {
        "key": "A",
        "text": "Ổn định, xử lý chất dinh dưỡng"
      },
      {
        "key": "B",
        "text": "Cặn lơ lửng"
      },
      {
        "key": "C",
        "text": "Vi sinh vật gây bệnh"
      },
      {
        "key": "D",
        "text": "Kim loại nặng"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 291,
    "question": "Để tạo điều kiện cho quá trình lọc ép bùn từ quá trình xử lý nước thải được tốt hơn, có thể bổ sung thêm:",
    "options": [
      {
        "key": "A",
        "text": "Polimer"
      },
      {
        "key": "B",
        "text": "Nhiệt"
      },
      {
        "key": "C",
        "text": "Để một thời gian cho bùn ổn định"
      },
      {
        "key": "D",
        "text": "Lọc thô trước"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 292,
    "question": "Nguyên tắc hoạt động của bể UASB là:",
    "options": [
      {
        "key": "A",
        "text": "Nước thải được nạp liệu từ phía đáy bể, đi qua lớp bùn hạt. Khí sinh ra từ lớp bùn sẽ dính bám vào các hạt bùn và cùng với khí tự do nổi lên phía mặt bể. Tại đây, quá trình tách pha khí-lỏng-rắn diễn ra. Khí theo ống dẫn qua bồn hấp thu. Bùn sau khi tách khỏi bọt khí lại lắng xuống. Nước thải theo màng tràn răng cưa dẫn đến công trình xử lý tiếp theo"
      },
      {
        "key": "B",
        "text": "Nước thải được nạp liệu từ phía đỉnh bể, đi qua lớp bùn hạt. Khí sinh ra từ lớp bùn sẽ dính bám vào các hạt bùn và cùng với khí tự do nổi lên phía mặt bể. Tại đây, quá trình tách pha khí-lỏng-rắn diễn ra. Khí theo ống dẫn qua bồn hấp thu. Bùn sau khi tách khỏi bọt khí lại lắng xuống. Nước thải theo màng tràn răng cưa dẫn đến công trình xử lý tiếp theo"
      },
      {
        "key": "C",
        "text": "Nước thải được nạp liệu từ phía đáy bể, đi qua lớp bùn hạt. Khí sinh ra từ lớp bùn sẽ dính bám vào các hạt bùn và cùng với khí tự do nổi lên phía mặt bể. Tại đây, quá trình tách pha khí-lỏng-rắn diễn ra. Khí theo ống dẫn qua bồn hấp thu. Nước thải theo màng tràn răng cưa dẫn đến công trình xử lý tiếp theo"
      },
      {
        "key": "D",
        "text": "Nước thải được nạp liệu từ phía đáy bể, đi qua lớp bùn hạt. Khí sinh ra từ lớp bùn nổi lên phía mặt bể. Tại đây, quá trình tách pha khí-lỏng-rắn diễn ra. Khí theo ống dẫn qua bồn hấp thu. Bùn sau khi tách khỏi bọt khí lại lắng xuống. Nước thải theo màng tràn răng cưa dẫn đến công trình xử lý tiếp theo"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 293,
    "question": "Khả năng tự làm sạch của nước sông là:",
    "options": [
      {
        "key": "A",
        "text": "Khả năng xáo trộn (hay pha loãng) thuần túy lý học giữa nước thải và nước sông"
      },
      {
        "key": "B",
        "text": "Quá trình khoáng hóa, sa lắng, pha loãng, hấp thu, hấp phụ các chất ô nhiễm chứa trong nước sông"
      },
      {
        "key": "C",
        "text": "Khả năng loại bỏ được các chất ô nhiễm ở một mức độ nhất định nào đó"
      },
      {
        "key": "D",
        "text": "Khả năng sử dụng các yếu tố sinh học để loại bỏ chất thải"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 294,
    "question": "Hỗn hợp khí sinh ra từ giai đoạn metan hóa của quá trình xử lý sinh học kỵ khí gồm:",
    "options": [
      {
        "key": "A",
        "text": "CH4, CO2, NH3, H2S"
      },
      {
        "key": "B",
        "text": "CH4, CO2, H2S, NO2"
      },
      {
        "key": "C",
        "text": "CH4, H2S, NH3, H2"
      },
      {
        "key": "D",
        "text": "CH4, H2S, N2, H2"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 295,
    "question": "Trong xử lý nước thải sản xuất bia rượu, thông số ô nhiễm nào sau đây ít quan trọng nhất:",
    "options": [
      {
        "key": "A",
        "text": "COD"
      },
      {
        "key": "B",
        "text": "Độ màu"
      },
      {
        "key": "C",
        "text": "BOD"
      },
      {
        "key": "D",
        "text": "SS"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 296,
    "question": "Điền tên công trình còn thiếu (???) vào sơ đồ hệ thống xử lý nước thải sản xuất tinh bột khoai mì: nước thải → bể lắng → ??? → bể aerotank → bể lắng sinh học → bể khử trùng",
    "options": [
      {
        "key": "A",
        "text": "Bể điều hòa có thổi khí"
      },
      {
        "key": "B",
        "text": "Bể lọc kỵ khí"
      },
      {
        "key": "C",
        "text": "Hồ sinh học"
      },
      {
        "key": "D",
        "text": "Bể keo tụ"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 297,
    "question": "Chọn phát biểu đúng:",
    "options": [
      {
        "key": "A",
        "text": "Tại các nhà máy sản xuất thực phẩm, trạm xử lý nước thải tập trung thường được đặt ở khu vực thấp nhất, gần nguồn tiếp nhận"
      },
      {
        "key": "B",
        "text": "Tại các nhà máy sản xuất thực phẩm, trạm xử lý nước thải tập trung thường được đặt ở khu vực thấp nhất, gần nguồn xả nhất"
      },
      {
        "key": "C",
        "text": "Tại các nhà máy sản xuất thực phẩm, trạm xử lý nước thải tập trung thường được đặt ở khu vực cao nhất, gần nguồn tiếp nhận"
      },
      {
        "key": "D",
        "text": "Tại các nhà máy sản xuất thực phẩm, trạm xử lý nước thải tập trung thường được đặt ở khu vực cao nhất, gần nguồn xả"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 298,
    "question": "Vi khuẩn nitrat hoá trong xử lý nước thải là:",
    "options": [
      {
        "key": "A",
        "text": "Nitrosomonas"
      },
      {
        "key": "B",
        "text": "Nitratsomonas"
      },
      {
        "key": "C",
        "text": "Nitrosoccocus"
      },
      {
        "key": "D",
        "text": "Nitrobacter"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 299,
    "question": "Động lực của quá trình tuyển nổi là:",
    "options": [
      {
        "key": "A",
        "text": "Bọt khí làm khối lượng riêng chất rắn giảm"
      },
      {
        "key": "B",
        "text": "Bọt khí làm khối lượng riêng chất rắn tăng"
      },
      {
        "key": "C",
        "text": "Bọt khí lôi kéo chất rắn nổi lên"
      },
      {
        "key": "D",
        "text": "Do lực đẩy của hạt bẩn mạnh hơn lực đẩy của dòng nước"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 300,
    "question": "Tìm quy trình xử lý nước thải đúng trong số các quy trình bên dưới:",
    "options": [
      {
        "key": "A",
        "text": "Chỉnh pH - keo tụ - chỉnh pH - aerotank - lắng"
      },
      {
        "key": "B",
        "text": "Chỉnh pH - keo tụ - lắng - chỉnh pH - aerotank - lắng"
      },
      {
        "key": "C",
        "text": "Keo tụ - lắng - aerotank - lắng - chỉnh pH"
      },
      {
        "key": "D",
        "text": "Keo tụ - chỉnh pH - aerotank - lắng"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 301,
    "question": "Hình vẽ sau mô tả công trình xử lý nước thải nào?",
    "options": [
      {
        "key": "A",
        "text": "Bể lắng"
      },
      {
        "key": "B",
        "text": "Bể tách dầu"
      },
      {
        "key": "C",
        "text": "Bể lắng cát"
      },
      {
        "key": "D",
        "text": "Bể điều hòa"
      }
    ],
    "answer": "B",
    "images": [
      "images/q301_1.png"
    ]
  },
  {
    "id": 302,
    "question": "Hình vẽ sau mô tả công trình xử lý nước thải gì?",
    "options": [
      {
        "key": "A",
        "text": "Bể lọc"
      },
      {
        "key": "B",
        "text": "Bể khử trùng"
      },
      {
        "key": "C",
        "text": "Bể DAF"
      },
      {
        "key": "D",
        "text": "Bể lắng"
      }
    ],
    "answer": "C",
    "images": [
      "images/q302_1.png"
    ]
  },
  {
    "id": 303,
    "question": "Hình vẽ sau mô tả công trình xử lý nước thải gì?",
    "options": [
      {
        "key": "A",
        "text": "Bể UASB"
      },
      {
        "key": "B",
        "text": "Bể SBR"
      },
      {
        "key": "C",
        "text": "Bể tuyển nổi khí hòa tan"
      },
      {
        "key": "D",
        "text": "Bể MBBR"
      }
    ],
    "answer": "C",
    "images": [
      "images/q303_1.png"
    ]
  },
  {
    "id": 304,
    "question": "Công trình Oxic trong hình dưới đây sử dụng phương pháp xử lý nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Xử lý hóa học"
      },
      {
        "key": "B",
        "text": "Xử lý hóa lý"
      },
      {
        "key": "C",
        "text": "Xử lý sinh học"
      },
      {
        "key": "D",
        "text": "Xử lý cơ học"
      }
    ],
    "answer": "C",
    "images": [
      "images/q304_1.png"
    ]
  },
  {
    "id": 305,
    "question": "Công trình Oxic trong hình dưới đây sử dụng phương pháp xử lý nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Xử lý sinh học kỵ khí"
      },
      {
        "key": "B",
        "text": "Xử lý sinh học thiếu khí"
      },
      {
        "key": "C",
        "text": "Xử lý cơ học (khuấy trộn)"
      },
      {
        "key": "D",
        "text": "Xử lý sinh học hiếu khí"
      }
    ],
    "answer": "D",
    "images": [
      "images/q305_1.png",
      "images/q305_2.png"
    ]
  },
  {
    "id": 306,
    "question": "Thiết bị ???? là thiết bị gì trong hệ thống xử lý nước thải sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Máy bơm nước"
      },
      {
        "key": "B",
        "text": "Máy khuấy trộn"
      },
      {
        "key": "C",
        "text": "Thiết bị châm hóa chất"
      },
      {
        "key": "D",
        "text": "Máy thổi khí"
      }
    ],
    "answer": "D",
    "images": [
      "images/q306_1.png"
    ]
  },
  {
    "id": 307,
    "question": "Bồn chứa ???? là chứa hóa chất gì trong hệ thống xử lý nước thải sau đây?",
    "options": [
      {
        "key": "A",
        "text": "NaOH"
      },
      {
        "key": "B",
        "text": "HCl"
      },
      {
        "key": "C",
        "text": "FeCl3"
      },
      {
        "key": "D",
        "text": "Clo"
      }
    ],
    "answer": "D",
    "images": [
      "images/q307_1.png"
    ]
  },
  {
    "id": 308,
    "question": "Hệ thống đường ống trong hình có nhiệm vụ gì trong bể điều hòa?",
    "options": [
      {
        "key": "A",
        "text": "Phân phối nước từ dưới lên"
      },
      {
        "key": "B",
        "text": "Cung cấp oxy, xáo trộn"
      },
      {
        "key": "C",
        "text": "Cung cấp hóa chất khử trùng"
      },
      {
        "key": "D",
        "text": "Tất cả đều đúng"
      }
    ],
    "answer": "B",
    "images": [
      "images/q308_1.png"
    ]
  },
  {
    "id": 309,
    "question": "Bể điều hòa trong hệ thống sau được sắp xếp theo kiểu nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Điều hòa ngoài dòng"
      },
      {
        "key": "B",
        "text": "Điều hòa trong dòng"
      },
      {
        "key": "C",
        "text": "Điều hòa trực tiếp"
      },
      {
        "key": "D",
        "text": "Điều hòa gián tiếp"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 310,
    "question": "Bể điều hòa trong hệ thống sau được sắp xếp theo kiểu nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Điều hòa trong dòng"
      },
      {
        "key": "B",
        "text": "Điều hòa trực tiếp"
      },
      {
        "key": "C",
        "text": "Điều hòa ngoài dòng"
      },
      {
        "key": "D",
        "text": "Điều hòa gián tiếp"
      }
    ],
    "answer": "C",
    "images": [
      "images/q310_1.png"
    ]
  },
  {
    "id": 311,
    "question": "Trong bể SBR, tên của thiết bị này là gì?",
    "options": [
      {
        "key": "A",
        "text": "Máy thổi khí"
      },
      {
        "key": "B",
        "text": "Máy bơm nước"
      },
      {
        "key": "C",
        "text": "Thiết bị khuấy trộn bề mặt"
      },
      {
        "key": "D",
        "text": "Thiết bị hòa trộn hóa chất"
      }
    ],
    "answer": "C",
    "images": [
      "images/q311_1.png"
    ]
  },
  {
    "id": 312,
    "question": "Đường (1) mô tả loại lắng nào trong đồ thị quá trình lắng sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Lắng keo tụ"
      },
      {
        "key": "B",
        "text": "Lắng vùng"
      },
      {
        "key": "C",
        "text": "Lắng nén"
      },
      {
        "key": "D",
        "text": "Lắng độc lập"
      }
    ],
    "answer": "D",
    "images": [
      "images/q312_1.png",
      "images/q312_2.png"
    ]
  },
  {
    "id": 313,
    "question": "Đường (2) mô tả loại lắng nào trong đồ thị quá trình lắng sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Lắng độc lập"
      },
      {
        "key": "B",
        "text": "Lắng vùng"
      },
      {
        "key": "C",
        "text": "Lắng nén"
      },
      {
        "key": "D",
        "text": "Lắng keo tụ"
      }
    ],
    "answer": "D",
    "images": [
      "images/q313_1.png"
    ]
  },
  {
    "id": 314,
    "question": "Hình vẽ sau đây mô tả công trình xử lý nước thải nào?",
    "options": [
      {
        "key": "A",
        "text": "Bể lắng ngang"
      },
      {
        "key": "B",
        "text": "Bể lắng lớp mỏng"
      },
      {
        "key": "C",
        "text": "Bể lắng ly tâm"
      },
      {
        "key": "D",
        "text": "Bể lắng đứng"
      }
    ],
    "answer": "D",
    "images": [
      "images/q314_1.png"
    ]
  },
  {
    "id": 315,
    "question": "Hệ thống sau đây có nhiệm vụ gì trong hệ thống xử lý nước thải?",
    "options": [
      {
        "key": "A",
        "text": "Khuấy trộn"
      },
      {
        "key": "B",
        "text": "Làm thoáng"
      },
      {
        "key": "C",
        "text": "Châm hóa chất"
      },
      {
        "key": "D",
        "text": "Điều chỉnh pH"
      }
    ],
    "answer": "D",
    "images": [
      "images/q315_1.png"
    ]
  },
  {
    "id": 316,
    "question": "Dựa theo đồ thị sau đây, pH phù hợp để kết tủa Fe3+ là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "7"
      },
      {
        "key": "D",
        "text": "4"
      }
    ],
    "answer": "D",
    "images": [
      "images/q316_1.png"
    ]
  },
  {
    "id": 317,
    "question": "Dựa theo đồ thị sau đây, pH phù hợp để kết tủa Ni là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "9"
      },
      {
        "key": "B",
        "text": "8"
      },
      {
        "key": "C",
        "text": "10"
      },
      {
        "key": "D",
        "text": "7"
      }
    ],
    "answer": "C",
    "images": [
      "images/q317_1.png"
    ]
  },
  {
    "id": 318,
    "question": "Dựa theo đồ thị sau đây, pH phù hợp để kết tủa Zn là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "6"
      },
      {
        "key": "B",
        "text": "8"
      },
      {
        "key": "C",
        "text": "12"
      },
      {
        "key": "D",
        "text": "10"
      }
    ],
    "answer": "D",
    "images": [
      "images/q318_1.png"
    ]
  },
  {
    "id": 319,
    "question": "Dựa theo đồ thị sau đây, pH phù hợp để kết tủa Pb là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "10"
      },
      {
        "key": "B",
        "text": "9"
      },
      {
        "key": "C",
        "text": "8"
      },
      {
        "key": "D",
        "text": "11"
      }
    ],
    "answer": "A",
    "images": [
      "images/q319_1.png"
    ]
  },
  {
    "id": 320,
    "question": "Dựa theo đồ thị sau đây, pH phù hợp để kết tủa Cu là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "8"
      },
      {
        "key": "B",
        "text": "6"
      },
      {
        "key": "C",
        "text": "4"
      },
      {
        "key": "D",
        "text": "2"
      }
    ],
    "answer": "A",
    "images": [
      "images/q320_1.png"
    ]
  },
  {
    "id": 321,
    "question": "Dựa theo đồ thị sau đây, pH phù hợp để kết tủa Cr là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "3"
      },
      {
        "key": "B",
        "text": "7"
      },
      {
        "key": "C",
        "text": "5"
      },
      {
        "key": "D",
        "text": "9"
      }
    ],
    "answer": "B",
    "images": [
      "images/q320_1.png"
    ]
  },
  {
    "id": 322,
    "question": "Thiết bị sau đây có nhiệm vụ gì trong hệ thống xử lý nước tinh khiết?",
    "options": [
      {
        "key": "A",
        "text": "Khuấy trộn"
      },
      {
        "key": "B",
        "text": "Khử trùng"
      },
      {
        "key": "C",
        "text": "Châm hóa chất"
      },
      {
        "key": "D",
        "text": "Tất cả đều sai"
      }
    ],
    "answer": "B",
    "images": [
      "images/q322_1.png"
    ]
  },
  {
    "id": 323,
    "question": "Hệ thống khử trùng trong hình sau đây khấy trộn bằng phương pháp nào?",
    "options": [
      {
        "key": "A",
        "text": "Khuấy trộn cơ khí"
      },
      {
        "key": "B",
        "text": "Khuấy trộn khí nén"
      },
      {
        "key": "C",
        "text": "Khuấy trộn thủy lực"
      },
      {
        "key": "D",
        "text": "Khuấy trộn tự nhiên"
      }
    ],
    "answer": "C",
    "images": [
      "images/q323_1.png"
    ]
  },
  {
    "id": 324,
    "question": "Trong hệ thống xử lý nước, công trình sau đây tên là gì?",
    "options": [
      {
        "key": "A",
        "text": "Bể sinh học hiếu khí"
      },
      {
        "key": "B",
        "text": "Bể điều hòa"
      },
      {
        "key": "C",
        "text": "Bể lọc chậm"
      },
      {
        "key": "D",
        "text": "Bể lắng ngang"
      }
    ],
    "answer": "D",
    "images": [
      "images/q324_1.png"
    ]
  },
  {
    "id": 325,
    "question": "Thành phần số (8) có nhiệm vụ gì trong bể lắng ngang?",
    "options": [
      {
        "key": "A",
        "text": "Chứa bùn"
      },
      {
        "key": "B",
        "text": "Chống xáo trộn nước đầu vào"
      },
      {
        "key": "C",
        "text": "Chống tràn"
      },
      {
        "key": "D",
        "text": "Hạn chế hiện tường ngắn dòng"
      }
    ],
    "answer": "A",
    "images": [
      "images/q325_1.png"
    ]
  },
  {
    "id": 326,
    "question": "Thành phần (05) có nhiệm vụ gì trong bể lắng ngang?",
    "options": [
      {
        "key": "A",
        "text": "Chắn váng nổi"
      },
      {
        "key": "B",
        "text": "Thu bùn"
      },
      {
        "key": "C",
        "text": "Tránh xáo trộn dòng nước"
      },
      {
        "key": "D",
        "text": "Thu váng nổi"
      }
    ],
    "answer": "D",
    "images": [
      "images/q326_1.png"
    ]
  },
  {
    "id": 327,
    "question": "Thành phần (04) có nhiệm vụ gì trong bể lắng ngang?",
    "options": [
      {
        "key": "A",
        "text": "Giàn cào bùn"
      },
      {
        "key": "B",
        "text": "Bơm nước"
      },
      {
        "key": "C",
        "text": "Hành lang công tác"
      },
      {
        "key": "D",
        "text": "Motor kéo cho giàn cào bùn"
      }
    ],
    "answer": "D",
    "images": [
      "images/q327_1.png"
    ]
  },
  {
    "id": 328,
    "question": "Trong đồ thị sinh trưởng của vi sinh vật, pha (1) gọi là gì?",
    "options": [
      {
        "key": "A",
        "text": "Pha log"
      },
      {
        "key": "B",
        "text": "Pha cân bằng"
      },
      {
        "key": "C",
        "text": "Pha thích nghi"
      },
      {
        "key": "D",
        "text": "Pha chết"
      }
    ],
    "answer": "C",
    "images": [
      "images/q328_1.png"
    ]
  },
  {
    "id": 329,
    "question": "Trong đồ thị sinh trưởng của vi sinh vật, pha (2) gọi là gì?",
    "options": [
      {
        "key": "A",
        "text": "Pha thích nghi"
      },
      {
        "key": "B",
        "text": "Pha cân bằng"
      },
      {
        "key": "C",
        "text": "Pha log"
      },
      {
        "key": "D",
        "text": "Pha chết"
      }
    ],
    "answer": "C",
    "images": [
      "images/q329_1.png"
    ]
  },
  {
    "id": 330,
    "question": "Trong đồ thị sinh trưởng của vi sinh vật, pha (3) gọi là gì?",
    "options": [
      {
        "key": "A",
        "text": "Pha thích nghi"
      },
      {
        "key": "B",
        "text": "Pha log"
      },
      {
        "key": "C",
        "text": "Pha chết"
      },
      {
        "key": "D",
        "text": "Pha cân bằng"
      }
    ],
    "answer": "D",
    "images": [
      "images/q330_1.png",
      "images/q330_2.png"
    ]
  },
  {
    "id": 331,
    "question": "Trong đồ thị sinh trưởng của vi sinh vật, pha (4) gọi là gì?",
    "options": [
      {
        "key": "A",
        "text": "Pha thích nghi"
      },
      {
        "key": "B",
        "text": "Pha log"
      },
      {
        "key": "C",
        "text": "Pha cân bằng"
      },
      {
        "key": "D",
        "text": "Pha chết"
      }
    ],
    "answer": "D",
    "images": [
      "images/q331_1.png"
    ]
  },
  {
    "id": 332,
    "question": "Sơ đồ hệ thống sau mô tả công trình nào trong hệ thống xử lý nước?",
    "options": [
      {
        "key": "A",
        "text": "Lắng"
      },
      {
        "key": "B",
        "text": "Lọc"
      },
      {
        "key": "C",
        "text": "Keo tụ tạo bông"
      },
      {
        "key": "D",
        "text": "Xử lý sinh học"
      }
    ],
    "answer": "C",
    "images": [
      "images/q332_1.png"
    ]
  },
  {
    "id": 333,
    "question": "Hệ thống sau xử lý nước bằng phương pháp nào?",
    "options": [
      {
        "key": "A",
        "text": "Hóa học"
      },
      {
        "key": "B",
        "text": "Cơ học"
      },
      {
        "key": "C",
        "text": "Xử lý sinh học"
      },
      {
        "key": "D",
        "text": "Hóa lý"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 334,
    "question": "Hệ thống sau đây có tên gọi là gì trong công trình xử lý nước thải?",
    "options": [
      {
        "key": "A",
        "text": "SBR-lắng"
      },
      {
        "key": "B",
        "text": "UASB- lắng"
      },
      {
        "key": "C",
        "text": "Aerotank-lắng"
      },
      {
        "key": "D",
        "text": "Lọc - lắng"
      }
    ],
    "answer": "C",
    "images": [
      "images/q334_1.png"
    ]
  },
  {
    "id": 335,
    "question": "Hệ thống sau đây là công trình gì trong hệ thống xử lý nước thải?",
    "options": [
      {
        "key": "A",
        "text": "Xử lý sinh học kỵ khí"
      },
      {
        "key": "B",
        "text": "Xử lý sinh học thiếu khí"
      },
      {
        "key": "C",
        "text": "Xử lý bùn sinh học"
      },
      {
        "key": "D",
        "text": "Xử lý sinh học hiếu khí"
      }
    ],
    "answer": "D",
    "images": [
      "images/q335_1.png"
    ]
  },
  {
    "id": 336,
    "question": "Hệ thống sau đây có thể xử lý chất ô nhiễm nào?",
    "options": [
      {
        "key": "A",
        "text": "Xử lý cặn lơ lửng"
      },
      {
        "key": "B",
        "text": "Xử lý dầu mỡ"
      },
      {
        "key": "C",
        "text": "Xử lý bùn"
      },
      {
        "key": "D",
        "text": "Xử lý chất hữu cơ"
      }
    ],
    "answer": "D",
    "images": [
      "images/q336_1.png"
    ]
  },
  {
    "id": 337,
    "question": "Công trình này có tên gọi là gì trong hệ thống xử lý nước thải?",
    "options": [
      {
        "key": "A",
        "text": "Hệ thống oxy hóa nâng cao"
      },
      {
        "key": "B",
        "text": "Bể aerotank"
      },
      {
        "key": "C",
        "text": "Mương oxy hóa"
      },
      {
        "key": "D",
        "text": "Bể SBR"
      }
    ],
    "answer": "C",
    "images": [
      "images/q337_1.png"
    ]
  },
  {
    "id": 338,
    "question": "Sơ đồ sau đây có tên là gì trong hệ thống xử lý nước thải?",
    "options": [
      {
        "key": "A",
        "text": "MBBR"
      },
      {
        "key": "B",
        "text": "SBR"
      },
      {
        "key": "C",
        "text": "AAO"
      },
      {
        "key": "D",
        "text": "UASB"
      }
    ],
    "answer": "C",
    "images": [
      "images/q338_1.png"
    ]
  },
  {
    "id": 339,
    "question": "Sơ đồ sau đây được sử dụng để loại bỏ chất ô nhiễm nào trong hệ thống xử lý nước thải?",
    "options": [
      {
        "key": "A",
        "text": "Cặn lơ lửng và chất hữu cơ"
      },
      {
        "key": "B",
        "text": "Chất hữu cơ dễ phân hủy và khó phân hủy"
      },
      {
        "key": "C",
        "text": "Chất hữu cơ và vi sinh vật"
      },
      {
        "key": "D",
        "text": "Chất hữu cơ và Nitơ"
      }
    ],
    "answer": "D",
    "images": [
      "images/q339_1.png"
    ]
  },
  {
    "id": 340,
    "question": "Công trình này có tên là gì trong hệ thống xử lý nước cấp đô thị?",
    "options": [
      {
        "key": "A",
        "text": "Lắng"
      },
      {
        "key": "B",
        "text": "Hòa trộn"
      },
      {
        "key": "C",
        "text": "Điều hòa"
      },
      {
        "key": "D",
        "text": "Làm thoáng"
      }
    ],
    "answer": "D",
    "images": [
      "images/q340_1.png"
    ]
  },
  {
    "id": 341,
    "question": "Công trình này có tên là gì trong hệ thống xử lý nước cấp đô thị?",
    "options": [
      {
        "key": "A",
        "text": "Lắng"
      },
      {
        "key": "B",
        "text": "Hòa trộn"
      },
      {
        "key": "C",
        "text": "Làm thoáng"
      },
      {
        "key": "D",
        "text": "Điều hòa"
      }
    ],
    "answer": "C",
    "images": [
      "images/q341_1.png"
    ]
  },
  {
    "id": 342,
    "question": "Công trình này có tên là gì trong hệ thống xử lý nước cấp đô thị?",
    "options": [
      {
        "key": "A",
        "text": "Lọc nhanh"
      },
      {
        "key": "B",
        "text": "Làm thoáng"
      },
      {
        "key": "C",
        "text": "Lắng"
      },
      {
        "key": "D",
        "text": "Lọc áp lực"
      }
    ],
    "answer": "A",
    "images": [
      "images/q341_1.png"
    ]
  },
  {
    "id": 343,
    "question": "Công trình này có tên là gì trong hệ thống xử lý nước cấp đô thị?",
    "options": [
      {
        "key": "A",
        "text": "Lọc áp lực"
      },
      {
        "key": "B",
        "text": "Lắng"
      },
      {
        "key": "C",
        "text": "Hòa trộn"
      },
      {
        "key": "D",
        "text": "Lọc nhanh"
      }
    ],
    "answer": "A",
    "images": [
      "images/q343_1.png"
    ]
  },
  {
    "id": 344,
    "question": "Thiết bị sau đây có nhiệm vụ gì trong hệ thống xử lý nước cấp?",
    "options": [
      {
        "key": "A",
        "text": "Châm hóa chất điều chỉnh pH"
      },
      {
        "key": "B",
        "text": "Châm dinh dưỡng"
      },
      {
        "key": "C",
        "text": "Châm hóa chất khử trùng"
      },
      {
        "key": "D",
        "text": "Tất cả đều đúng"
      }
    ],
    "answer": "C",
    "images": [
      "images/q344_1.png",
      "images/q344_2.png"
    ]
  },
  {
    "id": 345,
    "question": "Mục đích châm Clorin sau công trình (03) là gì?",
    "options": [
      {
        "key": "A",
        "text": "Diệt khuẩn đầu nguồn để tránh lan truyền ô nhiễm vi sinh vật"
      },
      {
        "key": "B",
        "text": "Giúp cặn lơ lửng dễ keo tụ ở công trình sau"
      },
      {
        "key": "C",
        "text": "Tất cả đều đúng"
      },
      {
        "key": "D",
        "text": "Diệt tảo, rong rêu và một số ấu trùng trong nước."
      }
    ],
    "answer": "D",
    "images": [
      "images/q345_1.png"
    ]
  },
  {
    "id": 346,
    "question": "Mục đích châm PAC trước công trình (04) là gì?",
    "options": [
      {
        "key": "A",
        "text": "Điều chỉnh pH nguồn nước"
      },
      {
        "key": "B",
        "text": "Diệt khuẩn"
      },
      {
        "key": "C",
        "text": "Keo tụ các hạt cặn, keo khó lắng"
      },
      {
        "key": "D",
        "text": "Tạo bông"
      }
    ],
    "answer": "C",
    "images": [
      "images/q346_1.png"
    ]
  },
  {
    "id": 347,
    "question": "Mục đích của công trình 05 để làm gì?",
    "options": [
      {
        "key": "A",
        "text": "Hòa trộn đều hóa chất vào nước"
      },
      {
        "key": "B",
        "text": "Khuấy trộn giúp các hạt keo tiếp xúc, kết dính với nhau"
      },
      {
        "key": "C",
        "text": "Khuấy trộn tránh hiện tượng lắng cặn"
      },
      {
        "key": "D",
        "text": "Tất cả đều đúng"
      }
    ],
    "answer": "B",
    "images": [
      "images/q347_1.png"
    ]
  },
  {
    "id": 348,
    "question": "Mục đích của cụm bể 06, 07 là gì?",
    "options": [
      {
        "key": "A",
        "text": "Loại bỏ cặn, chất hữu cơ ra khỏi nước"
      },
      {
        "key": "B",
        "text": "Loại bỏ cặn, vi sinh vật ra khỏi nước"
      },
      {
        "key": "C",
        "text": "Loại bỏ độ màu, độ đục ra khỏi nước"
      },
      {
        "key": "D",
        "text": "Loại bỏ cặn, bông keo ra khỏi nước"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 349,
    "question": "Nhiệm vụ của vôi trong công trình 08 là gì?",
    "options": [
      {
        "key": "A",
        "text": "Kết tủa một số ion kim loại trong nước"
      },
      {
        "key": "B",
        "text": "Khử trùng nước"
      },
      {
        "key": "C",
        "text": "Tất cả đều đúng"
      },
      {
        "key": "D",
        "text": "Điều chỉnh pH trước khi cấp nước"
      }
    ],
    "answer": "D",
    "images": [
      "images/q349_1.png"
    ]
  },
  {
    "id": 350,
    "question": "Nhiệm vụ của Fluor ở công trình 08 là gì?",
    "options": [
      {
        "key": "A",
        "text": "Diệt khuẩn nguồn nước"
      },
      {
        "key": "B",
        "text": "ổn định hóa nước"
      },
      {
        "key": "C",
        "text": "tất cả đều đúng"
      },
      {
        "key": "D",
        "text": "Bảo vệ răng cho người dùng nước"
      }
    ],
    "answer": "D",
    "images": [
      "images/q350_1.png"
    ]
  },
  {
    "id": 351,
    "question": "Đây là thiết bị gì trong công trình xử lý nước thải?",
    "options": [
      {
        "key": "A",
        "text": "Thiết bị vớt cát"
      },
      {
        "key": "B",
        "text": "Song chắn rác tự động"
      },
      {
        "key": "C",
        "text": "Thiết bị vớt dầu"
      },
      {
        "key": "D",
        "text": "Bơm nước"
      }
    ],
    "answer": "B",
    "images": [
      "images/q351_1.png"
    ]
  },
  {
    "id": 352,
    "question": "Trong hệ thống xử lý nước tinh khiết, bồn xử lý 03 là công trình gì?",
    "options": [
      {
        "key": "A",
        "text": "Lọc micro"
      },
      {
        "key": "B",
        "text": "Trao đổi ion"
      },
      {
        "key": "C",
        "text": "Lọc ultra"
      },
      {
        "key": "D",
        "text": "Lọc thô"
      }
    ],
    "answer": "D",
    "images": [
      "images/q352_1.png"
    ]
  },
  {
    "id": 353,
    "question": "Trong hệ thống xử lý nước tinh khiết, bồn xử lý 06 là công trình gì?",
    "options": [
      {
        "key": "A",
        "text": "Bồn hấp phụ"
      },
      {
        "key": "B",
        "text": "Bồn lắng"
      },
      {
        "key": "C",
        "text": "Bồn lọc thô"
      },
      {
        "key": "D",
        "text": "Bồn lọc tinh"
      }
    ],
    "answer": "D",
    "images": [
      "images/q353_1.png"
    ]
  },
  {
    "id": 354,
    "question": "Trong hệ thống xử lý nước tinh khiết, bồn xử lý 09 là công trình gì?",
    "options": [
      {
        "key": "A",
        "text": "Hệ thống RO"
      },
      {
        "key": "B",
        "text": "Hệ thống lọc Ultra"
      },
      {
        "key": "C",
        "text": "Hệ thống khử trùng cực tím"
      },
      {
        "key": "D",
        "text": "Tất cả đều sai"
      }
    ],
    "answer": "A",
    "images": [
      "images/q354_1.png"
    ]
  },
  {
    "id": 355,
    "question": "Trong hệ thống xử lý nước tinh khiết, thiết bị 14 là công trình gì?",
    "options": [
      {
        "key": "A",
        "text": "Máy ozone"
      },
      {
        "key": "B",
        "text": "Máy thổi khí"
      },
      {
        "key": "C",
        "text": "Thiết bị chỉnh pH"
      },
      {
        "key": "D",
        "text": "Tất cả đều sai"
      }
    ],
    "answer": "A",
    "images": [
      "images/q355_1.png",
      "images/q355_2.png"
    ]
  },
  {
    "id": 356,
    "question": "Trong hệ thống xử lý nước tinh khiết, thiết bị 12 là công trình gì?",
    "options": [
      {
        "key": "A",
        "text": "Thiết bị đo lưu lượng"
      },
      {
        "key": "B",
        "text": "Thiết bị lọc RO"
      },
      {
        "key": "C",
        "text": "Thiết bị chỉnh pH"
      },
      {
        "key": "D",
        "text": "Đèn UV"
      }
    ],
    "answer": "D",
    "images": [
      "images/q356_1.png"
    ]
  },
  {
    "id": 357,
    "question": "Theo EPA, bụi là:",
    "options": [
      {
        "key": "A",
        "text": "hỗn hợp của các hạt rắn và giọt lỏng có kích thước rất nhỏ. Bao gồm nhiều thành phần khác nhau như acids (nitrates, sulfates), chất hữu cơ, kim loại, đất và các hạt cát."
      },
      {
        "key": "B",
        "text": "hỗn hợp của các hạt rắn hoặc giọt lỏng có kích thước rất nhỏ. Bao gồm nhiều thành phần khác nhau như acids (nitrates, sulfates), chất hữu cơ, kim loại, đất và các hạt cát."
      },
      {
        "key": "C",
        "text": "các hạt rắn có kích thước rất nhỏ. Bao gồm nhiều thành phần khác nhau như acids (nitrates, sulfates), chất hữu cơ, kim loại, đất và các hạt cát."
      },
      {
        "key": "D",
        "text": "các giọt lỏng có kích thước rất nhỏ. Bao gồm nhiều thành phần khác nhau như acids (nitrates, sulfates), chất hữu cơ, kim loại, đất và các hạt cát."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 358,
    "question": "Quan sát hình ảnh và cho biết đây là thiết bị gì?",
    "options": [
      {
        "key": "A",
        "text": "Lọc túi vải."
      },
      {
        "key": "B",
        "text": "Cyclon"
      },
      {
        "key": "C",
        "text": "Lắng tĩnh điện."
      },
      {
        "key": "D",
        "text": "Buồng lắng bụi."
      }
    ],
    "answer": "D",
    "images": [
      "images/q358_1.png"
    ]
  },
  {
    "id": 359,
    "question": "Quan sát hình ảnh và cho biết đây là thiết bị gì?",
    "options": [
      {
        "key": "A",
        "text": "Lọc túi vải."
      },
      {
        "key": "B",
        "text": "Buồng lắng bụi."
      },
      {
        "key": "C",
        "text": "Lắng tĩnh điện."
      },
      {
        "key": "D",
        "text": "Cyclon."
      }
    ],
    "answer": "D",
    "images": [
      "images/q358_1.png"
    ]
  },
  {
    "id": 360,
    "question": "Quan sát hình ảnh và cho biết đây là thiết bị gì?",
    "options": [
      {
        "key": "A",
        "text": "Cyclon."
      },
      {
        "key": "B",
        "text": "Lọc túi vải."
      },
      {
        "key": "C",
        "text": "Buồng lắng bụi."
      },
      {
        "key": "D",
        "text": "Lắng tĩnh điện."
      }
    ],
    "answer": "A",
    "images": [
      "images/q360_1.png"
    ]
  },
  {
    "id": 361,
    "question": "Quan sát hình ảnh và cho biết đây là thiết bị gì?",
    "options": [
      {
        "key": "A",
        "text": "Lọc túi vải."
      },
      {
        "key": "B",
        "text": "Buồng lắng bụi."
      },
      {
        "key": "C",
        "text": "Cyclon."
      },
      {
        "key": "D",
        "text": "Lắng tĩnh điện."
      }
    ],
    "answer": "C",
    "images": [
      "images/q361_1.png",
      "images/q361_2.png"
    ]
  },
  {
    "id": 362,
    "question": "Quan sát hình ảnh và cho biết đây là thiết bị gì?",
    "options": [
      {
        "key": "A",
        "text": "Lọc túi vải."
      },
      {
        "key": "B",
        "text": "Cyclon."
      },
      {
        "key": "C",
        "text": "Buồng lắng bụi."
      },
      {
        "key": "D",
        "text": "Lắng tĩnh điện."
      }
    ],
    "answer": "A",
    "images": [
      "images/q362_1.png"
    ]
  },
  {
    "id": 363,
    "question": "Quan sát hình ảnh và cho biết đây là thiết bị gì?",
    "options": [
      {
        "key": "A",
        "text": "Cyclon."
      },
      {
        "key": "B",
        "text": "Lọc túi vải."
      },
      {
        "key": "C",
        "text": "Buồng lắng bụi."
      },
      {
        "key": "D",
        "text": "Lắng tĩnh điện."
      }
    ],
    "answer": "B",
    "images": [
      "images/q363_1.png"
    ]
  },
  {
    "id": 364,
    "question": "Quan sát hình ảnh và cho biết đây là thiết bị gì?",
    "options": [
      {
        "key": "A",
        "text": "Lọc túi vải."
      },
      {
        "key": "B",
        "text": "Cyclon."
      },
      {
        "key": "C",
        "text": "Buồng lắng bụi."
      },
      {
        "key": "D",
        "text": "Lắng tĩnh điện."
      }
    ],
    "answer": "A",
    "images": [
      "images/q363_1.png"
    ]
  },
  {
    "id": 365,
    "question": "Quan sát hình ảnh và cho biết đây là thiết bị gì?",
    "options": [
      {
        "key": "A",
        "text": "Tháp hấp phụ."
      },
      {
        "key": "B",
        "text": "Lọc túi vải."
      },
      {
        "key": "C",
        "text": "Tháp hấp thụ."
      },
      {
        "key": "D",
        "text": "Cyclon."
      }
    ],
    "answer": "C",
    "images": [
      "images/q365_1.png"
    ]
  },
  {
    "id": 366,
    "question": "Chọn đáp án sai về buồng lắng bụi?",
    "options": [
      {
        "key": "A",
        "text": "Ứng dụng tách bụi sơ bộ, có kích thước lớn."
      },
      {
        "key": "B",
        "text": "Hiệu quả xử lý cao hơn thiết bị cyclon."
      },
      {
        "key": "C",
        "text": "Cồng kềnh, chiếm nhiều diện tích."
      },
      {
        "key": "D",
        "text": "Cấu tạo đơn giản, dễ vận hành."
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 367,
    "question": "Chọn đáp án sai về thiết bị cyclon?",
    "options": [
      {
        "key": "A",
        "text": "Xử lý hiệu quả đối với bụi có khả năng kết dính cao."
      },
      {
        "key": "B",
        "text": "Hiệu suất tách bụi thấp với bụi có đường kính < 5µm."
      },
      {
        "key": "C",
        "text": "Dễ bị mài mòn khi bụi có độ cứng cao."
      },
      {
        "key": "D",
        "text": "Hiệu quả xử lý cao hơn so với buồng lắng trọng lực."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 368,
    "question": "Chọn đáp án sai về thiết bị cyclon?",
    "options": [
      {
        "key": "A",
        "text": "Xử lý hiệu quả đối với bụi có khả năng kết dính cao."
      },
      {
        "key": "B",
        "text": "Hiệu suất tách bụi thấp với bụi có đường kính < 5µm."
      },
      {
        "key": "C",
        "text": "Dễ bị mài mòn khi bụi có độ cứng cao."
      },
      {
        "key": "D",
        "text": "Hiệu quả xử lý cao hơn so với buồng lắng trọng lực."
      }
    ],
    "answer": "A",
    "images": [
      "images/q368_1.png"
    ]
  },
  {
    "id": 369,
    "question": "Quan sát hình ảnh và cho biết vật liệu này được sử dụng trong thiết bị nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Cyclon"
      },
      {
        "key": "B",
        "text": "Tháp hấp phụ"
      },
      {
        "key": "C",
        "text": "Tháp hấp thụ"
      },
      {
        "key": "D",
        "text": "Lọc túi vải"
      }
    ],
    "answer": "D",
    "images": [
      "images/q369_1.png"
    ]
  },
  {
    "id": 370,
    "question": "Quan sát hình ảnh và cho biết tên thiết bị này là gì?",
    "options": [
      {
        "key": "A",
        "text": "Lọc túi vải"
      },
      {
        "key": "B",
        "text": "Lắng tĩnh điện"
      },
      {
        "key": "C",
        "text": "Tháp hấp phụ"
      },
      {
        "key": "D",
        "text": "Tháp hấp thụ"
      }
    ],
    "answer": "A",
    "images": [
      "images/q370_1.png"
    ]
  },
  {
    "id": 371,
    "question": "Quan sát hình ảnh và cho biết tên thiết bị này là gì?",
    "options": [
      {
        "key": "A",
        "text": "Lọc túi vải"
      },
      {
        "key": "B",
        "text": "Lắng tĩnh điện"
      },
      {
        "key": "C",
        "text": "Cyclon"
      },
      {
        "key": "D",
        "text": "Buồng lắng bụi"
      }
    ],
    "answer": "A",
    "images": [
      "images/q370_1.png"
    ]
  },
  {
    "id": 372,
    "question": "Quan sát hình ảnh than hoạt tính và cho biết vật liệu này được ứng dụng cho thiết bị nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Tháp hấp thụ"
      },
      {
        "key": "B",
        "text": "Buồng lắng bụi"
      },
      {
        "key": "C",
        "text": "Lọc túi vải"
      },
      {
        "key": "D",
        "text": "Tháp hấp phụ"
      }
    ],
    "answer": "D",
    "images": [
      "images/q372_1.png"
    ]
  },
  {
    "id": 373,
    "question": "Chọn đáp án đúng: Dòng khí chuyển động trong cyclon có dạng:",
    "options": [
      {
        "key": "A",
        "text": "Xoáy ốc."
      },
      {
        "key": "B",
        "text": "Vuông góc với thân."
      },
      {
        "key": "C",
        "text": "Không có quy luật."
      },
      {
        "key": "D",
        "text": "Song song với thân."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 374,
    "question": "Chọn đáp án sai: Nhược điểm của thiết bị lắng tĩnh điện.",
    "options": [
      {
        "key": "A",
        "text": "Đơn giản, gọn nhe, không tốn nhiều diện tích."
      },
      {
        "key": "B",
        "text": "Có nguy cơ sinh ô nhiễm thứ cấp (dioxin)."
      },
      {
        "key": "C",
        "text": "Không thích hợp với hỗn hợp khí có khả năng cháy nổ."
      },
      {
        "key": "D",
        "text": "Chi phí thiết bị cao, chỉ phù hợp với quy mô lớn"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 375,
    "question": "Chọn đáp án sai về thiết bị lọc túi vải?",
    "options": [
      {
        "key": "A",
        "text": "Hiệu suất cao, có thể tách bụi có kích thước nhỏ hơn 0,5µm."
      },
      {
        "key": "B",
        "text": "Được ứng dụng để xử lý bụi sơ bộ."
      },
      {
        "key": "C",
        "text": "Là giải pháp thay thế lọc bụi tĩnh điện nhằm tránh tạo dioxin."
      },
      {
        "key": "D",
        "text": "Không thích hợp với bụi có khả năng hút ẩm cao hoặc môi trường có độ ẩm cao."
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 376,
    "question": "Chất lỏng được dùng để “bắt giữ” chất khí ô nhiễm trong tháp hấp thụ được gọi là:",
    "options": [
      {
        "key": "A",
        "text": "Chất hấp thụ."
      },
      {
        "key": "B",
        "text": "Chất hấp phụ."
      },
      {
        "key": "C",
        "text": "Chất ô nhiễm."
      },
      {
        "key": "D",
        "text": "Chất trơ."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 377,
    "question": "Than hoạt tính được ứng dụng phổ biến trong thiết bị xử lý để xử lý mùi ngành thực phẩm. Than hoạt tính được gọi là:",
    "options": [
      {
        "key": "A",
        "text": "Chất hấp thụ."
      },
      {
        "key": "B",
        "text": "Chất hấp phụ."
      },
      {
        "key": "C",
        "text": "Chất ô nhiễm."
      },
      {
        "key": "D",
        "text": "Chất trơ."
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 378,
    "question": "Người ta sử dụng dung dịch Ca(OH)2 trong tháp hấp thụ để xử lý khí thải SO2. Dung dịch Ca(OH)2 được gọi là:",
    "options": [
      {
        "key": "A",
        "text": "Chất hấp phụ."
      },
      {
        "key": "B",
        "text": "Chất ô nhiễm."
      },
      {
        "key": "C",
        "text": "Chất hấp thụ."
      },
      {
        "key": "D",
        "text": "Chất trơ."
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 379,
    "question": "Chọn đáp án đúng: Đặc điểm của chất hấp phụ?",
    "options": [
      {
        "key": "A",
        "text": "Có bề mặt riêng lớn."
      },
      {
        "key": "B",
        "text": "Dễ cháy."
      },
      {
        "key": "C",
        "text": "Dễ bay hơi."
      },
      {
        "key": "D",
        "text": "Ở trạng thái lỏng."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 380,
    "question": "Chọn đáp án đúng: Đặc điểm của chất hấp thụ?",
    "options": [
      {
        "key": "A",
        "text": "Có tính chọn lọc cao, chỉ hấp thụ khí ô nhiễm cần tách."
      },
      {
        "key": "B",
        "text": "Có nhiệt độ sôi bằng nhiệt độ sôi của hỗn hợp khí vào."
      },
      {
        "key": "C",
        "text": "Dễ bay hơi cùng dòng khí thải vào tháp."
      },
      {
        "key": "D",
        "text": "Là các chất rắn có bề mặt riêng lớn."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 381,
    "question": "Chọn đáp án đúng:",
    "options": [
      {
        "key": "A",
        "text": "Than hoạt tính là chất hấp phụ."
      },
      {
        "key": "B",
        "text": "Dung dịch NaOH là chất hấp phụ."
      },
      {
        "key": "C",
        "text": "Than hoạt tính là chất hấp thụ."
      },
      {
        "key": "D",
        "text": "Dung dịch NaOH ở trạng thái rắn."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 382,
    "question": "Chọn đáp án đúng:",
    "options": [
      {
        "key": "A",
        "text": "Than hoạt tính là chất hấp thụ."
      },
      {
        "key": "B",
        "text": "Dung dịch NaOH là chất hấp phụ."
      },
      {
        "key": "C",
        "text": "Dung dịch NaOH là chất hấp thụ"
      },
      {
        "key": "D",
        "text": "Than hoạt tính ở trạng thái lỏng."
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 383,
    "question": "Dòng điện đi qua điện cực phóng (điện cực quầng) trong thiết bị lắng tĩnh điện có đặc điểm:",
    "options": [
      {
        "key": "A",
        "text": "Dòng điện 1 chiều âm."
      },
      {
        "key": "B",
        "text": "Dòng điện 1 chiều dương."
      },
      {
        "key": "C",
        "text": "Dòng điện xoay chiều."
      },
      {
        "key": "D",
        "text": "Dòng điện trung tính."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 384,
    "question": "Đặc điểm của điện cực lắng trong thiết bị lắng tĩnh điện:",
    "options": [
      {
        "key": "A",
        "text": "Nối với dòng điện xoay chiều."
      },
      {
        "key": "B",
        "text": "Nối với dòng điện 1 chiều dương."
      },
      {
        "key": "C",
        "text": "Được nối đất."
      },
      {
        "key": "D",
        "text": "Nối với dòng điện 1 chiều âm."
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 385,
    "question": "Trong thiết bị lọc túi vải, thiết bị rủ bụi như hình có tên gọi là:",
    "options": [
      {
        "key": "A",
        "text": "Rủ bụi sóng âm."
      },
      {
        "key": "B",
        "text": "Rủ bụi rung lắc."
      },
      {
        "key": "C",
        "text": "Rủ bụi bằng khí thổi ngược."
      },
      {
        "key": "D",
        "text": "Rủ bụi bằng từ tính."
      }
    ],
    "answer": "A",
    "images": [
      "images/q385_1.png"
    ]
  },
  {
    "id": 386,
    "question": "Trong thiết bị lọc túi vải, thiết bị rủ bụi như hình có tên gọi là:",
    "options": [
      {
        "key": "A",
        "text": "Rủ bụi rung lắc."
      },
      {
        "key": "B",
        "text": "Rủ bụi sóng âm."
      },
      {
        "key": "C",
        "text": "Rủ bụi bằng khí thổi ngược."
      },
      {
        "key": "D",
        "text": "Rủ bụi bằng từ tính."
      }
    ],
    "answer": "A",
    "images": [
      "images/q386_1.png"
    ]
  },
  {
    "id": 387,
    "question": "Chọn đáp án đúng về thiết bị lắng trọng lực:",
    "options": [
      {
        "key": "A",
        "text": "Chỉ tách bụi có kích thước lớn."
      },
      {
        "key": "B",
        "text": "Tách được bụi có kích thước bé cỡ 0,01µm."
      },
      {
        "key": "C",
        "text": "Là thiết bị xử lý chính được ứng dụng nhiều trong ngành thực phẩm."
      },
      {
        "key": "D",
        "text": "Khó chế tạo, chiếm ít diện tích."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 388,
    "question": "Điện trường do điện cực phóng (điện cực quầng) tạo ra trong thiết bị lắng tĩnh điện có đặc điểm:",
    "options": [
      {
        "key": "A",
        "text": "Điện trường dương."
      },
      {
        "key": "B",
        "text": "Điện trường biến thiên."
      },
      {
        "key": "C",
        "text": "Điện trường biến đổi."
      },
      {
        "key": "D",
        "text": "Điện trường âm."
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 389,
    "question": "Quan sát hình ảnh và cho biết thiết bị dùng để xử lý:",
    "options": [
      {
        "key": "A",
        "text": "Bụi."
      },
      {
        "key": "B",
        "text": "Khí SO2."
      },
      {
        "key": "C",
        "text": "Mùi thực phẩm."
      },
      {
        "key": "D",
        "text": "Bụi và SO2."
      }
    ],
    "answer": "A",
    "images": [
      "images/q389_1.png"
    ]
  },
  {
    "id": 390,
    "question": "Trong quá trình đốt dầu thô (FO), lưu huỳnh dioxic (SO2) sinh ra theo cơ chế nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "S + O2  SO2."
      },
      {
        "key": "B",
        "text": "S + 1,5O2 + H2O  H2SO4."
      },
      {
        "key": "C",
        "text": "2S + H2 + O2  H2S + SO2."
      },
      {
        "key": "D",
        "text": "H2S + 1,5O2  SO2 + H2O."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 391,
    "question": "Dựa vào kích thước hạt bụi, bụi nào sau đây được gọi là bụi hô hấp?",
    "options": [
      {
        "key": "A",
        "text": "PM10."
      },
      {
        "key": "B",
        "text": "Bụi chì."
      },
      {
        "key": "C",
        "text": "Bụi kim loại."
      },
      {
        "key": "D",
        "text": "Bụi tinh bột."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 392,
    "question": "Chọn đáp án đúng nhất: Công đoạn nào sau đây phát sinh nguồn ô nhiễm không khí ở ngành công nghiệp thực phẩm?",
    "options": [
      {
        "key": "A",
        "text": "Đóng gói sản phẩm, đốt nhiên liệu (lò hơi)."
      },
      {
        "key": "B",
        "text": "Rửa nguyên liệu, phân loại sản phẩm."
      },
      {
        "key": "C",
        "text": "Trộn nguyên liệu, đốt nhiên liệu (lò hơi)."
      },
      {
        "key": "D",
        "text": "Rửa nguyên liệu, lên men."
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 393,
    "question": "Chọn đáp án đúng nhất về buồng lắng bụi:",
    "options": [
      {
        "key": "A",
        "text": "Trong buống lắng bụi, hạt bụi có kích thước lớn dễ dàng lắng xuống đáy buồng lắng hơn hạt bụi có kích thước nhỏ."
      },
      {
        "key": "B",
        "text": "Trong buồng lắng bụi, hạt bụi có kích thước nhỏ dễ dàng lắng xuống đáy buồng lắng hơn hạt bụi có kích thước lớn."
      },
      {
        "key": "C",
        "text": "Trong buồng lắng bụi, thời gian lưu hỗn hợp khí chứa bụi thấp hơn so với dòng khí ở cửa vào và ra do vận tốc lớn."
      },
      {
        "key": "D",
        "text": "Trong buồng lắng bụi, thời gian lưu hỗn hợp khí chứa bụi thấp hơn so với dòng khí ở cửa vào và ra do vận tốc nhỏ hơn."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 394,
    "question": "Chọn đáp án đúng nhất về cyclon:",
    "options": [
      {
        "key": "A",
        "text": "Cửa vào tiếp tuyến với thân."
      },
      {
        "key": "B",
        "text": "Dòng khí chuyển động trong thiết bị cyclon theo phương song song với thân."
      },
      {
        "key": "C",
        "text": "Thân cyclon có dạng hình trụ, tiết diện dạng hình vuông."
      },
      {
        "key": "D",
        "text": "Đáy cyclon có dạng hình cầu."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 395,
    "question": "Chọn đáp án đúng nhất về lọc túi vải:",
    "options": [
      {
        "key": "A",
        "text": "Lọc bụi túi vải là giải pháp thay thế cho lắng tĩnh điện khi hỗn hợp khí cần xử lý có nguy cơ sinh chất ô nhiễm thứ cấp (như dioxin)."
      },
      {
        "key": "B",
        "text": "Hiệu quả cao đối với hỗn hợp khí có khả năng bám dính cao."
      },
      {
        "key": "C",
        "text": "Tổn thất áp suất thấp."
      },
      {
        "key": "D",
        "text": "Chỉ áp dụng để xử lý bụi sơ bộ."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 396,
    "question": "Chọn đáp án đúng nhất về lắng tĩnh điện:",
    "options": [
      {
        "key": "A",
        "text": "Không phát sinh ô nhiễm thứ cấp như dioxin."
      },
      {
        "key": "B",
        "text": "Chi phí đầu tư cao, không thích hợp với các nhà máy quy mô vừa và nhỏ."
      },
      {
        "key": "C",
        "text": "Tổn thất áp suất lớn, tốn chi phí năng lượng dùng quạt đẩy."
      },
      {
        "key": "D",
        "text": "Không áp dụng được trong trường hợp hỗn hợp khí có độ ẩm cao."
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 397,
    "question": "Trong công nghiệp bụi phát sinh chủ yếu từ các công đoạn nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "công đoạn rửa; lên men; sàng, trộn nguyên liệu; đốt nhiên liệu (lò hơi)."
      },
      {
        "key": "B",
        "text": "công đoạn sấy; lên men; sàng, trộn nguyên liệu; đốt nhiên liệu (lò hơi)."
      },
      {
        "key": "C",
        "text": "công đoạn sấy; rửa, lên men; đốt nhiên liệu (lò hơi)."
      },
      {
        "key": "D",
        "text": "công đoạn trộn nguyên liệu; đốt nhiên liệu (lò hơi).."
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 398,
    "question": "Chọn phát biểu chính xác về khí thải trong ngành công nghiệp thực phẩm:",
    "options": [
      {
        "key": "A",
        "text": "Rất đa dạng, ở nhiều công đoạn khác nhau, tùy thuộc vào quy trình công nghệ sản xuất, nguyên nhiên liệu,…"
      },
      {
        "key": "B",
        "text": "Phát sinh ở công đoạn trộn và nghiền nguyên liệu."
      },
      {
        "key": "C",
        "text": "Hầu như không phát sinh khí thải."
      },
      {
        "key": "D",
        "text": "Rất đa dạng, ở nhiều công đoạn khác nhau và các quy trình công nghệ sản xuất đều phát thải giống nhau."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 399,
    "question": "Nguyên tắc xử lý bụi bằng buồng lắng bụi là dựa vào:",
    "options": [
      {
        "key": "A",
        "text": "Trọng lực của bản thân hạt bụi."
      },
      {
        "key": "B",
        "text": "Lực ly tâm do chuyển động xoắn gây ra."
      },
      {
        "key": "C",
        "text": "Lực tĩnh điện."
      },
      {
        "key": "D",
        "text": "Lực quán tính."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 400,
    "question": "Nguyên tắc xử lý bụi bằng cyclon là dựa vào:",
    "options": [
      {
        "key": "A",
        "text": "Lực ly tâm do chuyển động xoắn gây ra."
      },
      {
        "key": "B",
        "text": "Trọng lực của bản thân hạt bụi."
      },
      {
        "key": "C",
        "text": "Lực tĩnh điện."
      },
      {
        "key": "D",
        "text": "Lực quán tính."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 401,
    "question": "Quan sát hình ảnh và cho biết đây là sơ đồ nguyên lý của thiết bị nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Lắng tĩnh điện."
      },
      {
        "key": "B",
        "text": "Lắng trọng lực."
      },
      {
        "key": "C",
        "text": "Cyclon."
      },
      {
        "key": "D",
        "text": "Lọc túi vải."
      }
    ],
    "answer": "A",
    "images": [
      "images/q401_1.png"
    ]
  },
  {
    "id": 402,
    "question": "Quan sát hình ảnh và cho biết đây là sơ đồ nguyên tắc xử lý của thiết bị nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Lắng trọng lực."
      },
      {
        "key": "B",
        "text": "Cyclon."
      },
      {
        "key": "C",
        "text": "Lọc túi vải."
      },
      {
        "key": "D",
        "text": "Lắng tĩnh điện."
      }
    ],
    "answer": "C",
    "images": [
      "images/q402_1.png",
      "images/q402_2.png"
    ]
  },
  {
    "id": 403,
    "question": "Quan sát hình ảnh và cho biết đây là thiết bị gì?",
    "options": [
      {
        "key": "A",
        "text": "Tháp hấp phụ."
      },
      {
        "key": "B",
        "text": "Tháp hấp thụ."
      },
      {
        "key": "C",
        "text": "Lọc túi vải."
      },
      {
        "key": "D",
        "text": "Cyclon."
      }
    ],
    "answer": "A",
    "images": [
      "images/q403_1.png"
    ]
  },
  {
    "id": 404,
    "question": "Quan sát hình ảnh và cho biết tên tháp hấp thụ là gì?",
    "options": [
      {
        "key": "A",
        "text": "Tháp đệm."
      },
      {
        "key": "B",
        "text": "Tháp rửa rỗng."
      },
      {
        "key": "C",
        "text": "Tháp sủi bọt."
      },
      {
        "key": "D",
        "text": "Tháp tầng sôi."
      }
    ],
    "answer": "A",
    "images": [
      "images/q404_1.png"
    ]
  },
  {
    "id": 405,
    "question": "Quan sát hình ảnh và cho biết tên tháp hấp thụ là gì?",
    "options": [
      {
        "key": "A",
        "text": "Tháp đệm."
      },
      {
        "key": "B",
        "text": "Tháp đĩa lưới."
      },
      {
        "key": "C",
        "text": "Tháp rửa rỗng."
      },
      {
        "key": "D",
        "text": "Tháp tầng sôi."
      }
    ],
    "answer": "B",
    "images": [
      "images/q405_1.png"
    ]
  },
  {
    "id": 406,
    "question": "Quan sát hình ảnh và cho biết tên tháp hấp thụ là gì?",
    "options": [
      {
        "key": "A",
        "text": "Tháp mâm."
      },
      {
        "key": "B",
        "text": "Tháp đệm."
      },
      {
        "key": "C",
        "text": "Tháp rửa rỗng."
      },
      {
        "key": "D",
        "text": "Tháp đĩa lưới."
      }
    ],
    "answer": "A",
    "images": [
      "images/q406_1.png"
    ]
  },
  {
    "id": 407,
    "question": "Đặc trưng cơ bản của buồng lắng bụi là gì?",
    "options": [
      {
        "key": "A",
        "text": "Thân hình trụ tròn, đáy hình nón cụt, cửa vào tiếp tuyến với thân."
      },
      {
        "key": "B",
        "text": "Điện cực phóng (điện cực quầng) và điện cực lắng."
      },
      {
        "key": "C",
        "text": "Buồng lắng có tiết diện lớn hơn rất nhiều so với cửa vào và cửa ra."
      },
      {
        "key": "D",
        "text": "Các túi vải có bề mặt tiếp xúc riêng lớn."
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 408,
    "question": "Đặc trưng cơ bản của thiết bị cyclon là gì?",
    "options": [
      {
        "key": "A",
        "text": "Buồng lắng có tiết diện lớn hơn rất nhiều so với cửa vào và cửa ra."
      },
      {
        "key": "B",
        "text": "Điện cực phóng (điện cực quầng) và điện cực lắng."
      },
      {
        "key": "C",
        "text": "Thân hình trụ tròn, đáy hình nón cụt, cửa vào tiếp tuyến với thân."
      },
      {
        "key": "D",
        "text": "Các túi vải có bề mặt tiếp xúc riêng lớn."
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 409,
    "question": "Đặc trưng cơ bản của thiết bị lắng tĩnh điện là gì?",
    "options": [
      {
        "key": "A",
        "text": "Điện cực phóng (điện cực quầng) và điện cực lắng."
      },
      {
        "key": "B",
        "text": "Buồng lắng có tiết diện lớn hơn rất nhiều so với cửa vào và cửa ra."
      },
      {
        "key": "C",
        "text": "Thân hình trụ tròn, đáy hình nón cụt, cửa vào tiếp tuyến với thân."
      },
      {
        "key": "D",
        "text": "Các túi vải có bề mặt tiếp xúc riêng lớn."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 410,
    "question": "Đặc trưng cửa vào của cyclon?",
    "options": [
      {
        "key": "A",
        "text": "Cửa vào tiếp tuyến với thân hình trụ."
      },
      {
        "key": "B",
        "text": "Cửa vào vuông góc với thân."
      },
      {
        "key": "C",
        "text": "Cửa vào tạo với thân 1 góc 45 độ."
      },
      {
        "key": "D",
        "text": "Cửa vào được thiết kế tùy ý phụ thuộc vào nồng độ bụi ban đầu."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 411,
    "question": "Điện cực phóng (điện cực quầng) có đặc điểm?",
    "options": [
      {
        "key": "A",
        "text": "Là dây dẫn bằng kim loại, được nối với dòng điện một chiều âm có điện thế rất lớn cỡ trên 10.000V."
      },
      {
        "key": "B",
        "text": "Là các tấm hoặc ống bằng kim loại, được nối với dòng điện một chiều âm có điện thế rất lớn cỡ trên 10.000V."
      },
      {
        "key": "C",
        "text": "Là dây dẫn bằng kim loại, được nối đất."
      },
      {
        "key": "D",
        "text": "Là các tấm hoặc ống bằng kim loại, được nối đất."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 412,
    "question": "Điện cực lắng có đặc điểm?",
    "options": [
      {
        "key": "A",
        "text": "Là các tấm hoặc ống bằng kim loại, được nối đất."
      },
      {
        "key": "B",
        "text": "Là các tấm hoặc ống bằng kim loại, được nối với dòng điện một chiều âm có điện thế rất lớn cỡ trên 10.000V."
      },
      {
        "key": "C",
        "text": "Là dây dẫn bằng kim loại, được nối đất."
      },
      {
        "key": "D",
        "text": "Là dây dẫn bằng kim loại, được nối với dòng điện một chiều âm có điện thế rất lớn cỡ trên 10.000V."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 413,
    "question": "Giải pháp nào sau đây có thể nâng cao hiệu quả xử lý của buồng lắng bụi?",
    "options": [
      {
        "key": "A",
        "text": "Sử dụng buồng lắng có vách ngăn hoặc buồng lắng nhiều tầng."
      },
      {
        "key": "B",
        "text": "Giảm tiết diện của buồng lắng xuống."
      },
      {
        "key": "C",
        "text": "Tăng cường vận tốc đi vào buồng lắng."
      },
      {
        "key": "D",
        "text": "Tăng tiết diện cửa vào và cửa ra của buồng lắng."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 414,
    "question": "Giải pháp nào sau đây có thể nâng cao hiệu quả xử lý của cyclon?",
    "options": [
      {
        "key": "A",
        "text": "Thay thế cửa vào vuông góc với thân cyclon."
      },
      {
        "key": "B",
        "text": "Điều chỉnh quạt hút hoặc quạt đẩy qua cyclon."
      },
      {
        "key": "C",
        "text": "Thay thế cyclon khô bằng cyclon ước hoặc cyclon chùm."
      },
      {
        "key": "D",
        "text": "Giảm đường kính thân cyclon."
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 415,
    "question": "Điện cực lắng có tác dụng gì?",
    "options": [
      {
        "key": "A",
        "text": "Tích điện tích dương cho các hạt bụi."
      },
      {
        "key": "B",
        "text": "Trung hòa điện tích các hạt bụi mang điện khi bám vào."
      },
      {
        "key": "C",
        "text": "Tích điện tích âm cho các hạt bụi."
      },
      {
        "key": "D",
        "text": "Tăng cường khả năng tích điện cho hạt bụi."
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 416,
    "question": "Điện cực phóng (điện cực quầng) có tác dụng gì?",
    "options": [
      {
        "key": "A",
        "text": "Tạo từ trường âm nhằm tích điện cho các hạt bụi khi di chuyển qua."
      },
      {
        "key": "B",
        "text": "Tạo từ trường dương nhằm tích điện cho các hạt bụi khi di chuyển qua."
      },
      {
        "key": "C",
        "text": "Trung hòa điện tích các hạt bụi mang điện khi bám vào."
      },
      {
        "key": "D",
        "text": "Gia nhiệt cho các hạt bụi."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 417,
    "question": "Đâu là thành phần có trong khí thải lò hơi dùng than?",
    "options": [
      {
        "key": "A",
        "text": "H2S."
      },
      {
        "key": "B",
        "text": "HNO3."
      },
      {
        "key": "C",
        "text": "CO."
      },
      {
        "key": "D",
        "text": "HCl."
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 418,
    "question": "Đâu là thành phần có trong khí thải lò hơi dùng than?",
    "options": [
      {
        "key": "A",
        "text": "Bụi."
      },
      {
        "key": "B",
        "text": "H2S."
      },
      {
        "key": "C",
        "text": "VOCs (hợp chất hữu cơ bay hơi)."
      },
      {
        "key": "D",
        "text": "H2SO4."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 419,
    "question": "Đâu là thành phần không có trong khí thải lò hơi dùng than?",
    "options": [
      {
        "key": "A",
        "text": "Bụi."
      },
      {
        "key": "B",
        "text": "H2S."
      },
      {
        "key": "C",
        "text": "SO2."
      },
      {
        "key": "D",
        "text": "CO."
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 420,
    "question": "Đâu là thành phần có trong khí thải lò hơi dùng dầu FO?",
    "options": [
      {
        "key": "A",
        "text": "H2S."
      },
      {
        "key": "B",
        "text": "SO2."
      },
      {
        "key": "C",
        "text": "H2SO4."
      },
      {
        "key": "D",
        "text": "HCl."
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 421,
    "question": "Đâu là thành phần không có trong khí thải lò hơi dùng dầu FO?",
    "options": [
      {
        "key": "A",
        "text": "H2S."
      },
      {
        "key": "B",
        "text": "SO2"
      },
      {
        "key": "C",
        "text": "NOx."
      },
      {
        "key": "D",
        "text": "CO2."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 422,
    "question": "Đặc điểm khí nào sau đây không màu, không mùi, không vị khi đốt nhiên liệu rắn?",
    "options": [
      {
        "key": "A",
        "text": "CO."
      },
      {
        "key": "B",
        "text": "SO2"
      },
      {
        "key": "C",
        "text": "H2S."
      },
      {
        "key": "D",
        "text": "Benzen."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 423,
    "question": "Khi đốt nhiên liệu rắn hoặc lỏng, thành phần nào sau đây là nguyên nhân gây mưa acid?",
    "options": [
      {
        "key": "A",
        "text": "SO2."
      },
      {
        "key": "B",
        "text": "CO."
      },
      {
        "key": "C",
        "text": "H2S."
      },
      {
        "key": "D",
        "text": "VOCs (hợp chất hữu cơ bay hơi)."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 424,
    "question": "Khi đốt nhiên liệu rắn hoặc lỏng, thành phần nào sau đây là nguyên nhân gây mưa acid?",
    "options": [
      {
        "key": "A",
        "text": "CO."
      },
      {
        "key": "B",
        "text": "H2S."
      },
      {
        "key": "C",
        "text": "NOx."
      },
      {
        "key": "D",
        "text": "VOCs (hợp chất hữu cơ bay hơi)."
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 425,
    "question": "Quan sát hình ảnh và cho biết đây là thiết bị gì?",
    "options": [
      {
        "key": "A",
        "text": "Tháp hấp thụ."
      },
      {
        "key": "B",
        "text": "Buồng lắng bụi có vách ngăn."
      },
      {
        "key": "C",
        "text": "Tháp hấp phụ ."
      },
      {
        "key": "D",
        "text": "Cyclon."
      }
    ],
    "answer": "B",
    "images": [
      "images/q425_1.png"
    ]
  },
  {
    "id": 426,
    "question": "Quan sát hình ảnh và cho biết đây là thiết bị gì?",
    "options": [
      {
        "key": "A",
        "text": "Cyclon ướt."
      },
      {
        "key": "B",
        "text": "Tháp hấp thụ."
      },
      {
        "key": "C",
        "text": "Buồng lắng ướt."
      },
      {
        "key": "D",
        "text": "Tổ hợp cyclon."
      }
    ],
    "answer": "A",
    "images": [
      "images/q426_1.png"
    ]
  },
  {
    "id": 427,
    "question": "Để xử lý khí thải SO2 từ khí thải lò hơi dùng than trong ngành công nghiệp thực phẩm, người ta áp dụng thiết bị xử lý nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Tháp đệm."
      },
      {
        "key": "B",
        "text": "Cyclon."
      },
      {
        "key": "C",
        "text": "Lọc túi vải."
      },
      {
        "key": "D",
        "text": "Lắng tĩnh điện."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 428,
    "question": "Theo dây chuyền sản xuất chuối sấy như hình có quá trình đốt lưu huỳnh (S) để tẩy trắng chuối và phát sinh khí thải cần xử lý. Khí cần xử lý trong quy trình công nghệ này là:",
    "options": [
      {
        "key": "A",
        "text": "SO2."
      },
      {
        "key": "B",
        "text": "H2S."
      },
      {
        "key": "C",
        "text": "SO2 và H2S."
      },
      {
        "key": "D",
        "text": "SO2 và CO."
      }
    ],
    "answer": "A",
    "images": [
      "images/q428_1.png"
    ]
  },
  {
    "id": 429,
    "question": "Để xử lý mùi hôi/tanh từ công đoạn sơ chế nguyên liệu trong dây chuyền sản xuất cá đóng hộp, người ta áp dụng thiết bị xử lý nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Cyclon."
      },
      {
        "key": "B",
        "text": "Tháp hấp phụ."
      },
      {
        "key": "C",
        "text": "Lọc túi vải."
      },
      {
        "key": "D",
        "text": "Lắng tĩnh điện."
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 430,
    "question": "Để xử lý mùi phát sinh trong dây chuyền công nghệ sản xuất mì ăn liền, người ta tiến hành gom và dẫn khí có mùi qua thiết bị xử lý nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Tháp hấp phụ."
      },
      {
        "key": "B",
        "text": "Cyclon."
      },
      {
        "key": "C",
        "text": "Lọc túi vải."
      },
      {
        "key": "D",
        "text": "Lắng tĩnh điện."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 431,
    "question": "Để xử lý bụi phát sinh trong dây chuyền công nghệ tinh bột mì, người ta tiến hành gom và dẫn hỗn hợp khí qua thiết bị xử lý nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Cyclon à Lắng tĩnh điện."
      },
      {
        "key": "B",
        "text": "Lọc túi vải à Tháp hấp thụ."
      },
      {
        "key": "C",
        "text": "Cyclon à Lọc túi vải."
      },
      {
        "key": "D",
        "text": "Tháp hấp phụ à Tháp hấp thụ."
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 432,
    "question": "Chọn đáp án đúng: Quy trình xử lý khí thải lò hơi sử dụng than đá.",
    "options": [
      {
        "key": "A",
        "text": "Hỗn hợp khí à Cyclon à Tháp hấp phụ à Ống khói."
      },
      {
        "key": "B",
        "text": "Hỗn hợp khí à Cyclon à Tháp hấp thụ à Ống khói."
      },
      {
        "key": "C",
        "text": "Hỗn hợp khí à Cyclon à Lọc bụi túi vải à Ống khói."
      },
      {
        "key": "D",
        "text": "Hỗn hợp khí à Tháp hấp thụ à Cyclon à Ống khói."
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 433,
    "question": "Chọn đáp án đúng: Thiết bị nào sau đây không sử dụng trong xử lý khí thải ngành thực phẩm?",
    "options": [
      {
        "key": "A",
        "text": "Lắng tĩnh điện."
      },
      {
        "key": "B",
        "text": "Cyclon."
      },
      {
        "key": "C",
        "text": "Lọc túi vải."
      },
      {
        "key": "D",
        "text": "Tháp hấp phụ."
      }
    ],
    "answer": "A",
    "images": [
      "images/q433_1.png"
    ]
  },
  {
    "id": 434,
    "question": "Để xử lý mùi hôi và hơi khó tan trong nước, người ta ứng dụng thiết bị nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Tháp hấp phụ."
      },
      {
        "key": "B",
        "text": "Tháp hấp thụ."
      },
      {
        "key": "C",
        "text": "Cyclon ướt."
      },
      {
        "key": "D",
        "text": "Lọc túi vải."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 435,
    "question": "Để thu hồi khí ô nhiễm có giá trị, người ta có thể dùng phương pháp nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Tháp hấp phụ có hoàn nguyên."
      },
      {
        "key": "B",
        "text": "Tháp hấp phụ không hoàn nguyên."
      },
      {
        "key": "C",
        "text": "Lắng trọng lực kết hợp với Cyclon ướt."
      },
      {
        "key": "D",
        "text": "Lọc túi vải."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 436,
    "question": "Thiết bị nào sau đây có thể xử lý được hơi thủy ngân?",
    "options": [
      {
        "key": "A",
        "text": "Tháp hấp phụ."
      },
      {
        "key": "B",
        "text": "Tháp hấp thụ."
      },
      {
        "key": "C",
        "text": "Lắng trọng lực."
      },
      {
        "key": "D",
        "text": "Lọc túi vải."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 437,
    "question": "Để xử lý mùi trong quá trình sản xuất nước tương, người ta có thể sử dụng thiết bị nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Tháp hấp thụ."
      },
      {
        "key": "B",
        "text": "Lắng trọng lực."
      },
      {
        "key": "C",
        "text": "Tháp hấp phụ."
      },
      {
        "key": "D",
        "text": "Cyclon."
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 438,
    "question": "Để xử lý bụi trong quá trình trộn nguyên liệu trong sản xuất mì tôm, người ta có thể sử dụng thiết bị nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Tháp hấp thụ."
      },
      {
        "key": "B",
        "text": "Lọc túi vải."
      },
      {
        "key": "C",
        "text": "Lắng trọng lực."
      },
      {
        "key": "D",
        "text": "Lắng tĩnh điện."
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 439,
    "question": "Để xử lý mùi hôi trong quá trình sản xuất bột cá, người ta có thể sử dụng thiết bị nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Tháp hấp thụ bằng than hoạt tính."
      },
      {
        "key": "B",
        "text": "Tháp hấp thụ sử dụng dung dịch NaOH."
      },
      {
        "key": "C",
        "text": "Cyclon ướt."
      },
      {
        "key": "D",
        "text": "Tháp rửa rỗng."
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 441,
    "question": "Quan sát hình ảnh và cho biết vai trò của thiết bị xử lý này có thể tách bụi có đường kính bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "dbụi > 0,01µm."
      },
      {
        "key": "B",
        "text": "dbụi < 0,01µm."
      },
      {
        "key": "C",
        "text": "dbụi < 100µm."
      },
      {
        "key": "D",
        "text": "dbụi > 0,5µm."
      }
    ],
    "answer": "A",
    "images": [
      "images/q441_1.png"
    ]
  },
  {
    "id": 442,
    "question": "Cao su, nhựa, nylon, giấy là thành phần chất thải rắn thuộc nhóm nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Chất vô cơ"
      },
      {
        "key": "B",
        "text": "Chất hữu cơ không có khả năng phân huỷ"
      },
      {
        "key": "C",
        "text": "Chất hữu cơ có khả năng phân huỷ sinh học"
      },
      {
        "key": "D",
        "text": "Chất thải nguy hại"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 443,
    "question": "Kim loại, thuỷ tinh, sành sứ là thành phần chất thải rắn thuộc nhóm nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Chất hữu cơ có khả năng phân huỷ sinh học"
      },
      {
        "key": "B",
        "text": "Chất vô cơ"
      },
      {
        "key": "C",
        "text": "Chất hữu cơ không có khả năng phân huỷ"
      },
      {
        "key": "D",
        "text": "Chất thải nguy hại"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 444,
    "question": "Nhận định phát biểu sau đây: “Bóng đèn huỳnh quang, pin, kim tiêm, chai lọ chứa hoá chất trừ sâu, phân bón phát sinh từ các hộ gia đình là chất thải nguy hại”",
    "options": [
      {
        "key": "A",
        "text": "Đúng"
      },
      {
        "key": "B",
        "text": "Sai"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 445,
    "question": "Nhận định phát biểu sau đây: “Chất thải rắn công nghiệp là chất thải rắn chứa các chất hoặc các hợp chất có 1 trong những đặc tính: phóng xạ, dễ cháy nổ, dễ lây nhiễm, gây ngộ độc hoặc các đặc tính nguy hại khác”",
    "options": [
      {
        "key": "A",
        "text": "Sai"
      },
      {
        "key": "B",
        "text": "Đúng"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 446,
    "question": "Nhận định phát biểu sau đây: “Chất thải nguy hại là chất thải chứa các chất hoặc các hợp chất có 1 trong những đặc tính: phóng xạ, dễ cháy nổ, dễ lây nhiễm, gây ngộ độc hoặc các đặc tính nguy hại khác”",
    "options": [
      {
        "key": "A",
        "text": "Đúng"
      },
      {
        "key": "B",
        "text": "Sai"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 447,
    "question": "Hoàn thành sơ đồ tổng quát hệ thống quản lý CTR đô thị sau:",
    "options": [
      {
        "key": "A",
        "text": "(5), (1), (3), (4), (6), (2)"
      },
      {
        "key": "B",
        "text": "(5), (1), (3), (4), (2), (6)"
      },
      {
        "key": "C",
        "text": "(5), (3), (1), (2), (4), (6)"
      },
      {
        "key": "D",
        "text": "(3), (5), (1), (4), (6), (2)"
      }
    ],
    "answer": "A",
    "images": [
      "images/q447_1.png"
    ]
  },
  {
    "id": 448,
    "question": "Thách thức lớn nhất đối với hệ thống quản lý CTR ở các đô thị là gì?",
    "options": [
      {
        "key": "A",
        "text": "Chưa phân loại rác tại nguồn"
      },
      {
        "key": "B",
        "text": "Chi phí lớn"
      },
      {
        "key": "C",
        "text": "Ý thức của người dân"
      },
      {
        "key": "D",
        "text": "Năng lực quản lý của nhà nước về quản lý chất thải rắn"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 449,
    "question": "Theo Nghị định 59/2007/NĐ-CP ban hành ngày 09/04/2007 về Quản lý chất thải rắn của Việt Nam quy định chất thải rắn là chất thải ở dạng rắn bao gồm những loại chất thải rắn nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "CTR đô thị"
      },
      {
        "key": "B",
        "text": "cả CTR thông thường và nguy hai"
      },
      {
        "key": "C",
        "text": "CTR thông thường"
      },
      {
        "key": "D",
        "text": "CTR nguy hại"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 450,
    "question": "Theo Nghị định 59/2007/NĐ-CP ban hành ngày 09/04/2007 về Quản lý chất thải rắn của Việt Nam quy định chất thải rắn phát thải trong sinh hoạt cá nhân, hộ gia đình, nơi công cộng được gọi chung là chất thải rắn nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "CTR sinh hoạt"
      },
      {
        "key": "B",
        "text": "CTR đô thị"
      },
      {
        "key": "C",
        "text": "CTR thông thường"
      },
      {
        "key": "D",
        "text": "cả CTR sinh hoạt và thông thường"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 451,
    "question": "Trong công tác thu gom, vận chuyển chất thải rắn sinh hoạt thì chất thải rắn được thu gom, vận chuyển trên các thiết bị nào sau đây:",
    "options": [
      {
        "key": "A",
        "text": "Container"
      },
      {
        "key": "B",
        "text": "Xe đẩy tay, xe tải, xe ép rác"
      },
      {
        "key": "C",
        "text": "Tàu, thuyền, phà"
      },
      {
        "key": "D",
        "text": "Xe đẩy tay, xe tải, xe ép rác, container, tàu, thuyền, phà"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 452,
    "question": "Theo thành phần vật lý - hoá học, chất thải rắn hữu cơ có khả năng phân huỷ sinh học bao gồm những loại nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Thức ăn dư thừa, cỏ, lá cây, gỗ, xác động vật chết"
      },
      {
        "key": "B",
        "text": "Giấy, gỗ"
      },
      {
        "key": "C",
        "text": "Nhựa, cao su, nylon, vải"
      },
      {
        "key": "D",
        "text": "giấy, gỗ, nhựa, cao su, nylon, vải"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 453,
    "question": "Theo thành phần vật lý - hoá học, chất thải rắn hữu cơ không có khả năng phân huỷ sinh học bao gồm những loại nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Thức ăn dư thừa, cỏ, lá cây, giấy, gỗ, xác động vật chết"
      },
      {
        "key": "B",
        "text": "Giấy, gỗ"
      },
      {
        "key": "C",
        "text": "Lá cây, nhựa, cao su, nylon, vải"
      },
      {
        "key": "D",
        "text": "nhựa, cao su, nylon, vải"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 454,
    "question": "Nhận định phát biểu sau: “Bản chất quá trình nhiệt phân hay khí hoá xử lý chất thải rắn bằng phương pháp nhiệt là quá trình đốt chất thải trong điều kiện có oxy”?",
    "options": [
      {
        "key": "A",
        "text": "Sai"
      },
      {
        "key": "B",
        "text": "Đúng"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 455,
    "question": "Phân loại chất thải rắn bằng từ trường thường ứng dụng để tách riêng biệt chất thải nào?",
    "options": [
      {
        "key": "A",
        "text": "Kim loại màu"
      },
      {
        "key": "B",
        "text": "Thực phẩm"
      },
      {
        "key": "C",
        "text": "Nhựa"
      },
      {
        "key": "D",
        "text": "Giấy"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 456,
    "question": "Phương pháp nén ép chất thải rắn thường được sử dụng cho mục đích gì trong quản lý chất thải rắn?",
    "options": [
      {
        "key": "A",
        "text": "Gia tăng khối lượng riêng của chất thải rắn"
      },
      {
        "key": "B",
        "text": "gia tăng khối lượng riêng và tính hiệu quả trong lưu trữ, vận chuyển CTR"
      },
      {
        "key": "C",
        "text": "Đồng nhất kích thước chất thải rắn"
      },
      {
        "key": "D",
        "text": "Tăng tính hiệu quả trong công tác lưu trữ và vận chuyển chất thải rắn"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 457,
    "question": "Để hạn chế sự phát sinh khí dioxin/furan trong quá trình đốt chất thải rắn thì nhiệt độ buồng đốt thứ cấp và thời gian lưu cháy trong lò bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "> 11000C, 2s"
      },
      {
        "key": "B",
        "text": "7600C, 0,5s"
      },
      {
        "key": "C",
        "text": "8500C, 1s"
      },
      {
        "key": "D",
        "text": "< 8500C, 2s"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 458,
    "question": "Nhận định phát biểu sau đây: “Xử lý chất thải rắn bằng phương pháp phân huỷ sinh học kỵ khí là quá trình phân huỷ chất thải rắn hữu cơ trong điều kiện môi trường có oxy ở nhiệt độ từ 30-650C”?",
    "options": [
      {
        "key": "A",
        "text": "Sai"
      },
      {
        "key": "B",
        "text": "Đúng"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 459,
    "question": "Nhận định phát biểu sau đây: “Xử lý chất thải rắn bằng phương pháp phân huỷ sinh học kỵ khí là quá trình phân huỷ chất thải rắn hữu cơ trong điều kiện môi trường không có oxy ở nhiệt độ từ 30-650C”?",
    "options": [
      {
        "key": "A",
        "text": "Đúng"
      },
      {
        "key": "B",
        "text": "Sai"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 460,
    "question": "Phân loại chất thải nguy hại được thực hiện theo quy định nào sau đây? 07:2009/BTNMT về ngưỡng chất thải nguy hại",
    "options": [
      {
        "key": "A",
        "text": "Phụ lục 1 ban hành kèm theo Thông tư 36/2015/TT- BTNMT"
      },
      {
        "key": "B",
        "text": "Nghị định 59/2007/NĐ-CP ban hành ngày 09/04/2007 về Quản lý chất thải rắn"
      },
      {
        "key": "C",
        "text": "cả Phụ lục 1 ban hành kèm theo Thông tư 36/2015/TT-BTNMT và Quy chuẩn kỹ thuật môi trường"
      },
      {
        "key": "D",
        "text": "Quy chuẩn kỹ thuật môi trường 07:2009/BTNMT về ngưỡng chất thải nguy hại"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 461,
    "question": "TCVN 6706:2009 là quy định nào đối với hệ thống quản lý chất thải rắn của Việt Nam?",
    "options": [
      {
        "key": "A",
        "text": "Chất thải nguy hại: dấu hiệu cảnh báo"
      },
      {
        "key": "B",
        "text": "Chất thải nguy hai: hướng dẫn phân loại"
      },
      {
        "key": "C",
        "text": "Ngưỡng giới hạn chất thải nguy hại"
      },
      {
        "key": "D",
        "text": "Phân loại chất thải rắn thông thường"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 462,
    "question": "TCVN 6707:2009 là quy định nào đối với hệ thống quản lý chất thải rắn của Việt Nam?",
    "options": [
      {
        "key": "A",
        "text": "Chất thải nguy hai: hướng dẫn phân loại"
      },
      {
        "key": "B",
        "text": "Chất thải nguy hại: dấu hiệu cảnh báo"
      },
      {
        "key": "C",
        "text": "Ngưỡng giới hạn chất thải nguy hại"
      },
      {
        "key": "D",
        "text": "Phân loại chất thải rắn thông thường"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 463,
    "question": "Hoàn thành quy trình xử lý CTR hữu cơ bằng công nghệ Compost sau:",
    "options": [
      {
        "key": "A",
        "text": "(7), (5), (1), (2), (4), (3), (6)"
      },
      {
        "key": "B",
        "text": "(7), (3), (5), (1), (2), (4), (6)"
      },
      {
        "key": "C",
        "text": "(7), (5), (1), (2), (3), (4), (6)"
      },
      {
        "key": "D",
        "text": "(7), (5), (1), (3), (4), (2), (6)"
      }
    ],
    "answer": "A",
    "images": [
      "images/q463_1.png"
    ]
  },
  {
    "id": 464,
    "question": "Các phương tiện vận chuyển chất thải nguy hại bắt buộc phải lắp đặt thiết bị nào trên xe?",
    "options": [
      {
        "key": "A",
        "text": "Dấu hiệu cảnh báo, ứng cứu sự cố và thiết bị GPS"
      },
      {
        "key": "B",
        "text": "Dấu hiệu cảnh báo, ứng cứu sự cố"
      },
      {
        "key": "C",
        "text": "Thiết bị định vị GPS"
      },
      {
        "key": "D",
        "text": "Thiết bị GPS, ứng cứu sự cố"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 465,
    "question": "Nhận định phát biểu sau đây: “Các phương tiện vận chuyển chất thải nguy hại khi di chuyển trên đường phố bắt buộc phải tuân thủ theo tuyến đường và thời gian đã được cấp phép hoạt động?",
    "options": [
      {
        "key": "A",
        "text": "Đúng"
      },
      {
        "key": "B",
        "text": "Sai"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 466,
    "question": "Công đoạn tách nước, nghiền, xay, nén ép chất thải rắn áp dụng theo phương pháp xử lý chất thải rắn nào?",
    "options": [
      {
        "key": "A",
        "text": "Cơ học"
      },
      {
        "key": "B",
        "text": "Hoá học"
      },
      {
        "key": "C",
        "text": "Sinh học"
      },
      {
        "key": "D",
        "text": "Lý - hoá học"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 467,
    "question": "Mục đích sử dụng sàng rung, trống quay để đạt được yêu cầu nào trong quá trình xử lý chất thải rắn?",
    "options": [
      {
        "key": "A",
        "text": "Tách riêng biệt các thành phần chất thải rắn"
      },
      {
        "key": "B",
        "text": "Giảm công suất xử lý chất thải rắn"
      },
      {
        "key": "C",
        "text": "Đồng nhất kích thước chất thải rắn cần xử lý"
      },
      {
        "key": "D",
        "text": "đồng nhất kích thước và tách riêng các thành phần CTR"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 468,
    "question": "Phân loại rác bằng phương pháp tĩnh điện nhằm tách thành phần nào của rác?",
    "options": [
      {
        "key": "A",
        "text": "Kim loại"
      },
      {
        "key": "B",
        "text": "Nhựa, giấy"
      },
      {
        "key": "C",
        "text": "Cao su, vải"
      },
      {
        "key": "D",
        "text": "Chất hữu cơ"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 469,
    "question": "Phân loại rác bằng phương pháp từ trường nhằm tách thành phần nào của rác?",
    "options": [
      {
        "key": "A",
        "text": "Kim loại màu"
      },
      {
        "key": "B",
        "text": "Nhựa, giấy"
      },
      {
        "key": "C",
        "text": "Cao su, vải"
      },
      {
        "key": "D",
        "text": "Kim loại đen"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 470,
    "question": "Công đoạn nén, ép chất thải rắn áp dụng để tăng hiệu quả cho quá trình nào của hệ thống quản lý chất thải rắn?",
    "options": [
      {
        "key": "A",
        "text": "Đồng nhất kích thước chất thải rắn cần xử lý"
      },
      {
        "key": "B",
        "text": "Lưu trữ và vận chuyển"
      },
      {
        "key": "C",
        "text": "Tách riêng biệt các thành phần chất thải rắn"
      },
      {
        "key": "D",
        "text": "Đồng nhất kích thước và tách riêng thành phần CTR"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 471,
    "question": "Công trình xử lý chất thải rắn dưới đây tên là gì?",
    "options": [
      {
        "key": "A",
        "text": "Lò nhiệt phân 01 cấp"
      },
      {
        "key": "B",
        "text": "Lò thùng quay"
      },
      {
        "key": "C",
        "text": "Lò nhiệt phân 02 cấp"
      },
      {
        "key": "D",
        "text": "Lò tầng sôi"
      }
    ],
    "answer": "C",
    "images": [
      "images/q471_1.png"
    ]
  },
  {
    "id": 472,
    "question": "Các yếu tố cần kiểm soát trong quá trình xử lý chất thải rắn bằng phương pháp đốt theo công nghệ nhiệt phân 02 cấp là gì?",
    "options": [
      {
        "key": "A",
        "text": "Nhiệt độ, thời gian và độ xáo trộn"
      },
      {
        "key": "B",
        "text": "Nhiệt độ, lượng oxy và thời gian"
      },
      {
        "key": "C",
        "text": "Thời gian và độ xáo trộn"
      },
      {
        "key": "D",
        "text": "Nhiệt độ và thời gian"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 473,
    "question": "Buồng đốt thứ cấp trong công nghệ đốt nhiệt phân 02 cấp hoạt động trong điều kiện như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Đốt không cấp oxy"
      },
      {
        "key": "B",
        "text": "Đốt khí hoá"
      },
      {
        "key": "C",
        "text": "Đốt dư oxy"
      },
      {
        "key": "D",
        "text": "Đốt khí hoá và nhiệt phân"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 474,
    "question": "Buồng đốt sơ cấp trong công nghệ đốt nhiệt phân 02 cấp hoạt động trong điều kiện như thế nào?",
    "options": [
      {
        "key": "A",
        "text": "Đốt dư oxy"
      },
      {
        "key": "B",
        "text": "Đốt khí hoá và nhiệt phân trong điều kiện không có oxy"
      },
      {
        "key": "C",
        "text": "Đốt không cấp oxy"
      },
      {
        "key": "D",
        "text": "Đốt khí hoá và nhiệt phân trong điều kiện có oxy"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 475,
    "question": "Điền vào chỗ trống định nghĩa sau đây: “Compost là quá trình phân hủy sinh học …………… và ổn định chất hữu cơ trong chất thải rắn đô thị nhờ hoạt động của VSV”",
    "options": [
      {
        "key": "A",
        "text": "Hiếu khí"
      },
      {
        "key": "B",
        "text": "Kỵ khí"
      },
      {
        "key": "C",
        "text": "Thiếu khí"
      },
      {
        "key": "D",
        "text": "Cả hiếu khí, kỵ khí và thiếu khí"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 476,
    "question": "Điền vào chỗ trống định nghĩa sau đây: “Compost là quá trình phân hủy sinh học hiếu khí và ổn định ……… trong chất thải rắn đô thị nhờ hoạt động của VSV”",
    "options": [
      {
        "key": "A",
        "text": "Chất hữu cơ"
      },
      {
        "key": "B",
        "text": "Chất vô cơ"
      },
      {
        "key": "C",
        "text": "Chất hữu cơ và vô cơ"
      },
      {
        "key": "D",
        "text": "Vi sinh vật"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 477,
    "question": "Điền vào chỗ trống định nghĩa sau đây: “Compost là quá trình phân hủy sinh học hiếu khí và ổn định chất hữu cơ trong chất thải rắn đô thị nhờ hoạt động của ……….”",
    "options": [
      {
        "key": "A",
        "text": "Vi sinh vật"
      },
      {
        "key": "B",
        "text": "Nấm"
      },
      {
        "key": "C",
        "text": "Côn trùng"
      },
      {
        "key": "D",
        "text": "Mùn"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 478,
    "question": "Điền vào chỗ trống định nghĩa sau đây: “………. là quá trình phân hủy sinh học kị khí chất hữu cơ trong môi trường không có oxy ở điều kiện mesophilic (30-40oC) hoặc thermophilic (50-65oC)”",
    "options": [
      {
        "key": "A",
        "text": "Compost"
      },
      {
        "key": "B",
        "text": "Nhiệt phân"
      },
      {
        "key": "C",
        "text": "Biogas"
      },
      {
        "key": "D",
        "text": "Khí hoá"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 479,
    "question": "Điền vào chỗ trống định nghĩa sau đây: “Biogas là quá trình phân hủy sinh học ……… chất hữu cơ trong môi trường ………. ở điều kiện mesophilic (30- 40oC) hoặc thermophilic (50-65oC)”",
    "options": [
      {
        "key": "A",
        "text": "Hiếu khí/có oxy"
      },
      {
        "key": "B",
        "text": "Hiếu khí/không có oxy"
      },
      {
        "key": "C",
        "text": "Kỵ khí/không có oxy"
      },
      {
        "key": "D",
        "text": "Thiếu khí/không có oxy"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 480,
    "question": "Sản phẩm chính của quá trình phân huỷ sinh học kỵ khí chất thải rắn là gì?",
    "options": [
      {
        "key": "A",
        "text": "Khí sinh học và bùn đã được ổn định"
      },
      {
        "key": "B",
        "text": "Khí sinh học"
      },
      {
        "key": "C",
        "text": "Bùn đã được ổn định"
      },
      {
        "key": "D",
        "text": "Vi sinh vật"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 481,
    "question": "CH4 là khí được sinh ra chủ yếu từ quá trình xử lý chất thải rắn nào?",
    "options": [
      {
        "key": "A",
        "text": "Compost"
      },
      {
        "key": "B",
        "text": "Biogas"
      },
      {
        "key": "C",
        "text": "Đốt"
      },
      {
        "key": "D",
        "text": "Xử lý cơ học"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 482,
    "question": "CH4 trong thành phần khí sinh học từ quá trình xử lý chất thải rắn hữu cơ bằng phương pháp biogas thường chiếm bao nhiêu phần trăm?",
    "options": [
      {
        "key": "A",
        "text": "55 - 65%"
      },
      {
        "key": "B",
        "text": "> 65 %"
      },
      {
        "key": "C",
        "text": "< 55%"
      },
      {
        "key": "D",
        "text": "100%"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 483,
    "question": "Quá trình ủ kỵ khí chất thải rắn hữu cơ bằng phương pháp Biogas thường xảy ra mấy giai đoạn?",
    "options": [
      {
        "key": "A",
        "text": "4 giai đoạn"
      },
      {
        "key": "B",
        "text": "3 giai đoạn"
      },
      {
        "key": "C",
        "text": "2 giai đoạn"
      },
      {
        "key": "D",
        "text": "5 giai đoạn"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 484,
    "question": "Giai đoạn 1 quá trình ủ kỵ khí chất thải rắn hữu cơ bằng phương pháp Biogas xảy ra phản ứng nào?",
    "options": [
      {
        "key": "A",
        "text": "Acid hoá"
      },
      {
        "key": "B",
        "text": "Acetate hoá"
      },
      {
        "key": "C",
        "text": "Thuỷ phân"
      },
      {
        "key": "D",
        "text": "Methane hoá"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 485,
    "question": "Giai đoạn 2 quá trình ủ kỵ khí chất thải rắn hữu cơ bằng phương pháp Biogas xảy ra phản ứng nào?",
    "options": [
      {
        "key": "A",
        "text": "Thuỷ phân"
      },
      {
        "key": "B",
        "text": "Acid hoá"
      },
      {
        "key": "C",
        "text": "Acetate hoá"
      },
      {
        "key": "D",
        "text": "Methane hoá"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 486,
    "question": "Giai đoạn 3 quá trình ủ kỵ khí chất thải rắn hữu cơ bằng phương pháp Biogas xảy ra phản ứng nào?",
    "options": [
      {
        "key": "A",
        "text": "Acetate hoá"
      },
      {
        "key": "B",
        "text": "Thuỷ phân"
      },
      {
        "key": "C",
        "text": "Acid hoá"
      },
      {
        "key": "D",
        "text": "Methane hoá"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 487,
    "question": "Giai đoạn 4 quá trình ủ kỵ khí chất thải rắn hữu cơ bằng phương pháp Biogas xảy ra phản ứng nào?",
    "options": [
      {
        "key": "A",
        "text": "Methane hoá"
      },
      {
        "key": "B",
        "text": "Thuỷ phân"
      },
      {
        "key": "C",
        "text": "Acid hoá"
      },
      {
        "key": "D",
        "text": "Acetate hoá"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 488,
    "question": "Thành phần khí sinh học được sinh ra chủ yếu ở phản ứng nào của quá trình xử lý chất thải rắn hữu cơ bằng phương pháp biogas?",
    "options": [
      {
        "key": "A",
        "text": "Thuỷ phân"
      },
      {
        "key": "B",
        "text": "Methane hoá"
      },
      {
        "key": "C",
        "text": "Acid hoá"
      },
      {
        "key": "D",
        "text": "Acetate hoá"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 489,
    "question": "Thứ bậc ưu tiên trong quản lý chất thải rắn là gì?",
    "options": [
      {
        "key": "A",
        "text": "Ngăn ngừa, giảm phát thải"
      },
      {
        "key": "B",
        "text": "Xử lý tiêu huỷ"
      },
      {
        "key": "C",
        "text": "Tái chế, tái sử dụng"
      },
      {
        "key": "D",
        "text": "Chôn lấp"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 490,
    "question": "Khối lượng chất thải rắn phát sinh ảnh hưởng bởi các yếu tố nào?",
    "options": [
      {
        "key": "A",
        "text": "Biến đổi khí hậu"
      },
      {
        "key": "B",
        "text": "Vị trí địa lý, lối sống, mùa trong năm, hoàn cảnh kinh tế địa phương"
      },
      {
        "key": "C",
        "text": "Thu gom không đúng quy định"
      },
      {
        "key": "D",
        "text": "Xử lý chưa triệt để"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 491,
    "question": "Theo Nghị định 59/2007 do Thủ tướng chính phủ ban hành về quản lý chất thải rắn, thời gian lưu giữ chất thải rắn không được phép vượt quá bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "4 ngày"
      },
      {
        "key": "B",
        "text": "1 ngày"
      },
      {
        "key": "C",
        "text": "2 ngày"
      },
      {
        "key": "D",
        "text": "3 ngày"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 492,
    "question": "Theo hướng dẫn kỹ thuật phân loại rác tại nguồn của Bộ TN&MT, chất thải rắn sinh hoạt được chia làm mấy loại?",
    "options": [
      {
        "key": "A",
        "text": "2 loại: tái chế và không tái chế"
      },
      {
        "key": "B",
        "text": "4 loại: tái chế, thực phẩm, nguy hại và chất thải khác"
      },
      {
        "key": "C",
        "text": "3 loại: tái chế, thực phẩm và chất thải khác"
      },
      {
        "key": "D",
        "text": "5 loại: tái chế, không tái chế, thực phẩm, nguy hại và chất thải khác"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 493,
    "question": "Phân loại CTNH theo TCVN 6707:2009 gồm mấy loại?",
    "options": [
      {
        "key": "A",
        "text": "6"
      },
      {
        "key": "B",
        "text": "9"
      },
      {
        "key": "C",
        "text": "7"
      },
      {
        "key": "D",
        "text": "8"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 494,
    "question": "Chất thải rắn nguy hại. Dấu hiệu cảnh báo, phòng ngừa được quy định theo TCVN nào?",
    "options": [
      {
        "key": "A",
        "text": "TCVN 6706 - 1995"
      },
      {
        "key": "B",
        "text": "TCVN 6707 - 1995"
      },
      {
        "key": "C",
        "text": "TCVN 6707 - 2009"
      },
      {
        "key": "D",
        "text": "TCVN 6706 - 2009"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 495,
    "question": "Hình dưới đây là dấu hiệu cảnh báo cho:",
    "options": [
      {
        "key": "A",
        "text": "Chất dễ cháy"
      },
      {
        "key": "B",
        "text": "Chất oxy hoá"
      },
      {
        "key": "C",
        "text": "Chất dễ nổ"
      },
      {
        "key": "D",
        "text": "Chất lây nhiễm"
      }
    ],
    "answer": "C",
    "images": [
      "images/q495_1.png"
    ]
  },
  {
    "id": 496,
    "question": "Hình dưới đây là dấu hiệu cảnh báo cho:",
    "options": [
      {
        "key": "A",
        "text": "Chất dễ nổ"
      },
      {
        "key": "B",
        "text": "Chất oxy hoá"
      },
      {
        "key": "C",
        "text": "Chất độc"
      },
      {
        "key": "D",
        "text": "Chất lây nhiễm"
      }
    ],
    "answer": "C",
    "images": [
      "images/q496_1.png"
    ]
  },
  {
    "id": 497,
    "question": "Các kim loại nặng như Pb, As, Cd, Cr, Ni, Hg, … được xếp vào nhóm nào?",
    "options": [
      {
        "key": "A",
        "text": "Chất dễ phản ứng"
      },
      {
        "key": "B",
        "text": "Chất độc"
      },
      {
        "key": "C",
        "text": "Chất lây nhiễm"
      },
      {
        "key": "D",
        "text": "Chất dễ cháy"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 498,
    "question": "Dung dịch NaOH đậm đặc có pH = 13 được xếp vào nhóm chất thải nguy hại loại gì?",
    "options": [
      {
        "key": "A",
        "text": "Dễ ăn mòn"
      },
      {
        "key": "B",
        "text": "Dễ cháy"
      },
      {
        "key": "C",
        "text": "Dễ nổ"
      },
      {
        "key": "D",
        "text": "Dễ phản ứng"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 499,
    "question": "Nhiệt độ cần khống chế để đảm bảo quá trình đốt chất thải nguy hại không tạo khí ô nhiễm thứ cấp Dioxin/Furan là bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "> 1.0000C"
      },
      {
        "key": "B",
        "text": "< 6500C"
      },
      {
        "key": "C",
        "text": "> 8500C"
      },
      {
        "key": "D",
        "text": "> 2.0000C"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 500,
    "question": "Chất thải lỏng dễ cháy là chất thải lỏng có nhiệt độ bắt cháy bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "< 600C"
      },
      {
        "key": "B",
        "text": "> 600C"
      },
      {
        "key": "C",
        "text": "< 300C"
      },
      {
        "key": "D",
        "text": "> 1000C"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 501,
    "question": "Cấp độ thấp nhất của hoạt động quản lý và xử lý chất thải rắn là gì?",
    "options": [
      {
        "key": "A",
        "text": "Xử lý tiêu huỷ"
      },
      {
        "key": "B",
        "text": "Tái chế, tái sử dụng"
      },
      {
        "key": "C",
        "text": "Chôn lấp"
      },
      {
        "key": "D",
        "text": "Giảm phát thải"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 502,
    "question": "Loại chất thải nào sau đây KHÔNG xếp chung vào nhóm các loại chất thải nguy hại, mà được tách riêng để quản lý và xử lý đặc biệt",
    "options": [
      {
        "key": "A",
        "text": "Chất thải y tế"
      },
      {
        "key": "B",
        "text": "Chất thải phóng xạ"
      },
      {
        "key": "C",
        "text": "Pin, ác quy"
      },
      {
        "key": "D",
        "text": "Vỏ, chai lọ đựng hóa chất"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 503,
    "question": "Điền vào chỗ trống: “….” được sản xuất bằng cách kết hợp cồn với dầu thực vật, mỡ động vật hoặc các loại mỡ nấu ăn được tái chế.",
    "options": [
      {
        "key": "A",
        "text": "Biodiesel"
      },
      {
        "key": "B",
        "text": "Bioethanol"
      },
      {
        "key": "C",
        "text": "Biogas"
      },
      {
        "key": "D",
        "text": "Biomass"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 504,
    "question": "Pin, acquy được xếp vào nhóm chất thải nguy hại dạng nào?",
    "options": [
      {
        "key": "A",
        "text": "Độc và ăn mòn"
      },
      {
        "key": "B",
        "text": "Chất độc"
      },
      {
        "key": "C",
        "text": "Ăn mòn"
      },
      {
        "key": "D",
        "text": "Lây nhiễm"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 505,
    "question": "Biển dấu hiệu cảnh báo, phòng ngừa phù hợp với loại CTNH được lưu giữ theo TCVN 6707:2009 với kích thước bao nhiêu?",
    "options": [
      {
        "key": "A",
        "text": "Tối đa 30 cm theo mỗi chiều"
      },
      {
        "key": "B",
        "text": "10 cm theo mỗi chiều"
      },
      {
        "key": "C",
        "text": "Không quy định"
      },
      {
        "key": "D",
        "text": "Tối thiểu 30 cm theo mỗi chiều"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 506,
    "question": "Trong khu vực lưu chứa CTNH, quy định bắt buộc phải có nhãn cảnh báo nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "hình b"
      },
      {
        "key": "B",
        "text": "hình a"
      },
      {
        "key": "C",
        "text": "hình c"
      },
      {
        "key": "D",
        "text": "hình d"
      }
    ],
    "answer": "B",
    "images": [
      "images/q506_1.png"
    ]
  },
  {
    "id": 507,
    "question": "Cho các hình sau đây, hình nào là hình biểu diễn dấu hiệu cảnh báo chất thải nguy hại theo TCVN 6707:2009?",
    "options": [
      {
        "key": "A",
        "text": "Hình 1,4"
      },
      {
        "key": "B",
        "text": "Cả 4 hình"
      },
      {
        "key": "C",
        "text": "Hình 2,3"
      },
      {
        "key": "D",
        "text": "Hình 4"
      }
    ],
    "answer": "A",
    "images": [
      "images/q507_1.png"
    ]
  },
  {
    "id": 508,
    "question": "Thiết bị lưu chứa CTNH được lắp cố định hoặc có thể tháo rời trên phương tiện vận chuyển phải đáp ứng các yêu cầu theo quy định nào?",
    "options": [
      {
        "key": "A",
        "text": "Thông tư 36/2015/TT-BTNMT quy định về quản lý chất thải nguy hại"
      },
      {
        "key": "B",
        "text": "Nghị định 38/2015/NĐ-CP quy định về quản lý chất thải và phế liệu"
      },
      {
        "key": "C",
        "text": "Khoản 2 Điều 36 Thông tư 02/2022/BTNMT"
      },
      {
        "key": "D",
        "text": "Nghị định 45/2022/NĐ-CP quy định về xử phạt hành chính trong lĩnh vực bảo vệ môi trường."
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 509,
    "question": "Xử lý chất thải rắn bằng phương pháp nhiệt bao gồm các phương pháp nào sau đây?",
    "options": [
      {
        "key": "A",
        "text": "Đốt, nhiệt phân"
      },
      {
        "key": "B",
        "text": "Nhiệt phân"
      },
      {
        "key": "C",
        "text": "Đốt, nhiệt phân, khí hoá"
      },
      {
        "key": "D",
        "text": "Khí hoá"
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 510,
    "question": "Nhận định phát biểu sau đây: “Chôn lấp là giải pháp xử lý chất thải rắn đơn giản, chi phí thấp, hiệu quả và không gây ô nhiễm thứ cấp, ảnh hưởng đến đời sống xã hội”",
    "options": [
      {
        "key": "A",
        "text": "Sai"
      },
      {
        "key": "B",
        "text": "Đúng"
      }
    ],
    "answer": "A",
    "images": []
  }
];
