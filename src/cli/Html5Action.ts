import { BuildAction } from './BuildAction';
import { Platform } from '../Platform';
import { CommandLineChoiceParameter } from '@microsoft/ts-command-line';
import { VrApi } from '../VrApi';

export class Html5Action extends BuildAction {
	private _vrApi: CommandLineChoiceParameter;
	
	public constructor() {
		super({
			actionName: Platform.HTML5,
			summary: 'build for the HTML5 target',
			documentation: 'build for the HTML5 target'
		});
	}

    protected onExecute(): Promise<void> { // abstract
        this.prepareBaseOptions();
        this._options.target = Platform.HTML5;
        this._options.vr = this._vrApi.value;
		return super.onExecute();
	}
	
	protected onDefineParameters(): void { //abstract
		super.onDefineParameters();
        this._vrApi = this.defineChoiceParameter({
			parameterLongName: "--vr",
            description: "Target VR device",
            alternatives: [
                VrApi.None,
                VrApi.WebVR,
            ],
            defaultValue: VrApi.None
        });
	}
}