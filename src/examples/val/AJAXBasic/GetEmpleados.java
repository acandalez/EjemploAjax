package examples.val.AJAXBasic;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.beans.Employee;
import model.service.EmployeeService;

public class GetEmpleados extends HttpServlet {
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {

		// Nuestra Request
		if (req.getParameter("dpto") != null) {
			String id = req.getParameter("dpto");
			EmployeeService empService = new EmployeeService();
			ArrayList<Employee> listaempleados = (ArrayList<Employee>) empService
					.getEmployeesByDepartment(id);
			resp.setContentType("text/xml");
			PrintWriter out = resp.getWriter();

			int n_empleados = listaempleados.size();

			// Nuestro Response.
			// Creamos el archivo XML.
			resp.setContentType("text/xml");
			resp.setCharacterEncoding("UTF-8");
			out.println("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
			out.println("<empleados>");

			for (int i = 0; i < n_empleados; i++) {
				out.println("<empleado>");

				out.println("<empleado>"
						+ listaempleados.get(i).getEmployeeId() + "</empleado>");

				out.println("<empleadoid>"
						+ listaempleados.get(i).getEmployeeId()
						+ "</empleadoid>");
				out.println("<empleadoNom>"
						+ listaempleados.get(i).getFirstName()
						+ "</empleadoNom>");
				out.println("</empleado>");
			}
			out.println("</empleados>");

		}

	}
}
