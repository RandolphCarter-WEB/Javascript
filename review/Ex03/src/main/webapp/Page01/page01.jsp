<%--
  Created by IntelliJ IDEA.
  User: User
  Date: 2023-05-18
  Time: 오후 2:07
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
      <title>Title</title>
  </head>
  <body>
    <h1>this is Page01.jps</h1>
    <%
      request.setCharacterEncoding("UTF-8");
      String id = request.getParameter("id");
      String pw = request.getParameter("pw");

      if(id.equals(("")) || pw.equals("")) {
//        response.sendRedirect("default.jsp");
        pageContext.forward("default.jsp");
      }
    %>
      <p>id : <%=id%></p>
      <p>pw : <%=pw%></p>
  </body>
</html>
