<?php
  $json = file_get_contents('php://input');
  $data = json_decode($json);
  $headers = "From: order@solidas.ru";
  if (mail('pierroit@yandex.ru', 'Новое обращение', 'Сообщение от' . $data->name . ' ' . 'Номер телефона' . $data->phone . ' '. ' Email отправителя ' . $data->email, $headers)) {
    http_response_code(200);
  } else {
    http_response_code(500);
  }
?>