function pas() 
{
	login_ok = false;
	user_name = "";
	user_name = prompt("Для отображения прайсов введите пароль.","");
	user_name = user_name.toLowerCase();

		if (user_name == "1")
		{
 			document.write("<style>.tabl{display: block;}</style>");
		} else {
			alert("Вы ввели неверный пароль!");
			document.write("<style>.error_pass{display: block;}</style>");
		}
}