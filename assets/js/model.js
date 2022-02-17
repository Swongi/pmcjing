/* Live2D Proprietary Software License Agreement
http://live2d.com/eula/live2d-proprietary-software-license-agreement_en.html 
TN
*/
const live2d = PIXI.live2d;
class Live2dModel {
    constructor() {
        this.app = new PIXI.Application({
            width: 1920,
            height: 1080,
            resolution: window.devicePixelRatio = 1,
            transparent: true,
            resizeTo: window,
            
        });
        this.modelSize = 50; // model 크기 설정
        // 위치 지정 
        this.modelX = 0; 
        this.modelY = 0; 
		this.loadModel();
        
    }
    onResize() {
        let width = window.innerWidth;
        let height = window.innerHeight;

        let scale = height / this.originalHeight;
        this.model.x = width / 2 + this.modelX;
        this.model.y = height / 2 + this.modelY;
        this.model.scale.set(scale * (this.modelSize / 50));
        if (this.model.masks) this.model.masks.resize(this.app.view.width, this.app.view.height);
    }
    async loadModel() {
        const Modelpath = 'assets/live2d/pmc_jingburger/pmc_jingburger.model3.json'; // 모델 설정
        let modelData = await live2d.Live2DModel.from(Modelpath);
        this.model = modelData;
		
        document.getElementById('live2d').appendChild(this.app.view);
        this.app.stage.addChild(this.model);

        this.model.anchor.set(0.5, 0.5);
        this.originalHeight = this.model.height;
        this.onResize();
    }
}