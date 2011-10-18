<%@ page session="true" contentType="text/html; charset=ISO-8859-1" %>
<%@ taglib uri="http://www.tonbeller.com/jpivot" prefix="jp" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core" %>
<jp:mondrianQuery id="query01" jdbcDriver="oracle.jdbc.driver.OracleDriver" 
	jdbcUrl="jdbc:oracle:thin:username/password@ora5.informatik.haw-hamburg.de:1521:inf09" 
	catalogUri="/WEB-INF/queries/BonDaten.xml"> 
	select {
		[Measures].[Preis Total], 
		[Measures].[Count Total],
		[Measures].[AVG Total]
	} on columns, {(
		[FILIALEN].[Alle Filialen],
		[VERKAEUFER].[Alle Verkaeufer],
		[ARTIKEL].[Alle Artikel]
	)}
	on rows from [BonDaten]
</jp:mondrianQuery>
<c:set var="title01" scope="session">Test it</c:set>
