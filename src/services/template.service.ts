class TemplateService {
  private static instance: TemplateService;
  public static getInstance(): TemplateService {
    if (!this.instance) {
      this.instance = new TemplateService();
    }
    return this.instance;
  }

  constructor() {
    console.log("Templateservice constructor");
  }
}
export default TemplateService;
