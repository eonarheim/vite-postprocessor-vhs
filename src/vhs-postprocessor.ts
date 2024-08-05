import * as ex from 'excalibur';
import VHS_SHADER from './vhs.glsl?raw';


export class VHSPostProcessor implements ex.PostProcessor {
    private _shader! : ex.ScreenShader;
    initialize(gl: WebGL2RenderingContext): void {
        this._shader = new ex.ScreenShader(gl,VHS_SHADER);
    }
    getLayout(): ex.VertexLayout {
        return this._shader.getLayout();
    }
    getShader(): ex.Shader {
        return this._shader.getShader();
    }
  }