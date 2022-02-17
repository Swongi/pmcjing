let model4 = new Live2dModel();
// 모델 설정 및 기타 기능 넣을 자리
document.getElementById('live2d').addEventListener('pointerdown', (e) => {
    var areas=model4.model.hitTest(e.clientX, e.clientY)
	if(areas.indexOf("Body")!=-1)
	{
		model4.model.motion('TapBody', 0, 3);
	}
})
window.addEventListener('resize', (tn) => {
    model4.onResize();
})