
var mySVG = d3.select("svg");
//Xi,Yi,Xf,Yf,color

d3.csv("https://raw.githubusercontent.com/chumo/Data2Serve/master/transition_clusters.csv", d3.autoType)
  .then(function(data){
    
    
    let circles = mySVG.selectAll("circle").data(data);
    circles=circles.enter()
        .append("circle")
        .attr("cx",function(d){return d.Xi;})
        .attr("cy",function(d){return d.Yi;})
        .attr("r",4)
        .attr("fill",function (d){ if(d.color=="blue"){ return "purple"}
                                else if(d.color=="red"){return "orange"}
                                else {return "bluegreen"};})//(d.color=="blue")? "purple":d.color; })
        
    circles=circles.transition().duration(4000)
        .attr("cx",function(d){return d.Xf;})
        .attr("cy",function(d){return d.Yf;})
    
    d3.select("svg").selectAll("circle")
        .on("mouseover",over)
        .on("mouseout",nolonger);
    
    d3.select("svg").selectAll("circle")
        .on("mouseover",over)
        .on("click",showDat)
    function over(){
        d3.select(this).attr("r",8).style("opacity", 0.5);
        
    }
    function  nolonger(){
        d3.select(this).attr("r",4).style("opacity", 1);
    }
    function  showDat(){
        x=d3.select(this).datum().Xi
        y=d3.select(this).datum().Yi
        xx=d3.select(this).datum().Xf
        yy=d3.select(this).datum().Yf
        mySVG.append("rect").attr("x",xx-10).attr("y",yy-15).attr("width","130").attr("height","30").attr("fill","white")
        .transition().delay(1003).remove()
        mySVG.append("text").attr("x",xx).attr("y",yy).text(x.toFixed(3)+","+y.toFixed(3)).transition().delay(1000)
        .remove()

        
    }

})


  
