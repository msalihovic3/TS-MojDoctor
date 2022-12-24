<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Sending Email with Freemarker HTML Template Example</title>

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>


    <style>
        body{
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
        }

        button{
            background-color: #4184F0;
            text-align: center;
            border-radius: 3px;
            border: 0px;
            color: white;
            padding-bottom: 5px;
            padding-top: 5px;
        }

        table{
            alignment: left;
            border: 0;
            collapse: 0;
            width: 600px;
            border-collapse: collapse;
        }
        .firstTr{
            height: 120px;
        }
        .first{
            alignment: center;
            background-color: #4184F3;
            padding: 0 0 5px 30px;
            text-align: left;
            vertical-align: bottom;
            color: #ffffff;
            font-size: 12px;
        }
        p{
            color: #330033;
        }
        h2{
            text-align: center;
        }
    </style>

</head>
<body>

<table>
    <tr class="firstTr" >
        <td class="first">
            <h1>MOJ DOKTOR - CONFIRM LOGIN</h1>
        </td>
    </tr>
    <tr>
        <td bgcolor="#fafafa" style="padding: 40px 30px 40px 30px;">
            <p>Dear user,</p>
            <p>Please click on the link below to confirm your login.</p>
            <p >${token}</p>
            <p>If you ignore this message, you won't be able to log in your account. </p>
            <p>Sincerely,</p>
            <p>MojDoktor Team</p>
        </td>
    </tr>

</table>

</body>
</html>
