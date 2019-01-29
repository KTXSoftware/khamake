"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BuildAction_1 = require("./BuildAction");
const Platform_1 = require("../Platform");
const GraphicsApi_1 = require("../GraphicsApi");
class LinuxAction extends BuildAction_1.BuildAction {
    constructor() {
        super({
            actionName: Platform_1.Platform.Linux,
            summary: 'build for the Linux target',
            documentation: 'build for the Linux target'
        });
    }
    onExecute() {
        this.prepareBaseOptions();
        this._options.target = Platform_1.Platform.Linux;
        this._options.graphics = this._graphicsAPI.value;
        this._options.compile = this._compile.value;
        this._options.run = this._run.value;
        return super.onExecute();
    }
    onDefineParameters() {
        super.onDefineParameters();
        this._graphicsAPI = this.defineChoiceParameter({
            parameterShortName: "-g",
            parameterLongName: "--graphics",
            description: "Graphics api to use",
            alternatives: [
                GraphicsApi_1.GraphicsApi.Default,
                GraphicsApi_1.GraphicsApi.OpenGL,
                GraphicsApi_1.GraphicsApi.Vulkan,
            ],
            defaultValue: GraphicsApi_1.GraphicsApi.Default
        });
        this._compile = this.defineFlagParameter({
            parameterLongName: "--compile",
            description: "Compile executable",
        });
        this._run = this.defineFlagParameter({
            parameterLongName: "--run",
            description: "Run executable",
        });
    }
}
exports.LinuxAction = LinuxAction;
//# sourceMappingURL=LinuxAction.js.map