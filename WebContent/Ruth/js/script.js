<script language="JavaScript"> 
<!-- 
var td1;
var colorselc;
var primeravez=0;
var cont=0;
 
/* function overTD(td,color){td.bgColor=color;};
function outTD(td,color){td.style.cursor='default';td.bgColor="#FF99FF";};
 */
	
function clickTD(td)
{	
	
/*	 if(td.bgColor=="#FF0000")
	{
		td.bgColor="#FFFFFF";
	 }else{
	 	td.bgColor="#FF99FF";
	 } */ 
	 
 
	 if(primeravez==0)
	{
			td1=td;
			colorselc=td1.bgColor;
			primeravez=1;
			cont++;
	}else
	{
		if (td.id!=td1.id)
		{
			if (colorselc==td.bgColor)
			{
				td.bgColor="#FFFFFF";
				td1.bgColor="#FFFFFF";
				primeravez=0;
				cont++;
				if(cont==20)
				{
					alert("Felicidades has terminado");
				}
			}
			else
				{
				alert("No son iguales");
				}
			
			}
		} 
}
//--> 
</script> 