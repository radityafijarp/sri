for (i=0;i<=295;i=i+10){
    baseColor ="6a0f03"
    color = "#"+addHexadecimals(decimalToHexadecimal(i),baseColor)
    console.log(color)
    drawLine(ctx,i,0,300,i,color);
}
// 2
for (i=0;i<=295;i=i+10){
    drawLine(ctx,300-i,300,0,300-i,"#346A03");
}
// 3
for (i=0;i<=295;i=i+10){
    drawLine(ctx,0,i,300-i,0,"yellow");
}
// 4
for (i=0;i<=295;i=i+10){
    drawLine(ctx,i,300,300,300-i,"green");
}
