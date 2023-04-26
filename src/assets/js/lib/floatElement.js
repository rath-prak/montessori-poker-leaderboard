  const floatElement = () => {

    var floatElement = $('.float-element');
  
    let floatElementTl = new TimelineMax({repeat:-1});

    floatElementTl.to(floatElement, 10, {
        motionPath:[{x:10, y:8}, {x:0, y:15}, {x:-10, y:10}, {x:0, y:0}],
        ease:Linear.easeNone });
  
}
  
export default floatElement;

 