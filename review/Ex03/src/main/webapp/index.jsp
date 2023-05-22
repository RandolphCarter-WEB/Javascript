<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
    <head>
        <title>JSP - Hello World</title>
    </head>
    <body>
        <form action="./Page01/page01.jsp" method="post">
            <p>Action to Page01</p>
            <label for ="id">ID : </label>
            <input type="text" id="id" name="id">
            <br />

            <label for="pw">PW : </label>
            <input type="password" id="pw" name="pw">
            <br />

            <button type="submit">Submit</button>
        </form>
        <br />
        <form action="./Page01/page01.jsp" method="post">
            <p>Action to Page02</p>
            <label for ="name">ID : </label>
            <input type="text" id="name" name="name">
            <br />

            <label for="password">PW : </label>
            <input type="password" id="password" name="password">
            <br />

            <button type="submit">Submit</button>
        </form>
    </body>
</html>