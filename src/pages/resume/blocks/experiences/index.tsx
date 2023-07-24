const Experiences = () => {
  return <div>
    <hr />
    <div fbc>
      <h4 m-0>青桔运营工作台 @滴滴出行</h4>
      <div>前后端开发</div>
      <div>2022年9月 -- 至今</div>
    </div>
    <div>
      项目介绍：覆盖青桔单车/电单车业务线的运营平台
    </div>
    <div>
      技术栈：Vue3全家桶 + qiankun + Antd-Vue + DEggJs + TS
    </div>
    <ul m0>
      <li>参与使用 qiankun
        重构老平台，一方面团队能持续用新技术更新和重构，一方面保证团队随时可以接入新需求，实现项目增量更新；
      </li>
      <li>负责开发工作台内外鉴权模式，使工作台支持SSO和PassPort两种登陆方式；</li>
      <li>利用 qiankun 应用管理配置功能，实现工作台能力配置化，提升工作台可复用性，帮助换电/资产业务线快速搭建工作台；</li>
      <li>使用 qiankun
        对接和融合多方平台，能够将涉及单车/电单车业务运营平台统一管理，大大增强老项目的可扩展能力，解决原始平台无设计、入口分散、操作链路长、页面加载性能差、技术栈单一等问题；工作台经改造后日uv500+、周uv1000+；NPS从50%提升至70%；
      </li>
      <li>
        帮助项目构建一条完备的流水线，实现多环境发布、环境隔离、版本管控，同时接入页面告警以及埋点上报，从而加强项目工程化建设；
      </li>
    </ul>

    <div fbc mt-4>
      <h4 m-0>作业/人员/运维资产模块 @滴滴出行</h4>
      <div>前端开发</div>
      <div>2021年10月 -- 至今</div>
    </div>
    <div>
      项目介绍：覆盖青桔单车/电单车业务线中工单/运维人员/运维资产等业务需求
    </div>
    <div>
      技术栈：Vue2 + Element + Serverless
    </div>
    <ul m0>
      <li>为配合上述运营工作台微前端升级，整体页面升级为qingkun微应用加载，提升页面加载性能；</li>
      <li>参与业务组件库搭建（Element + Vue2 + Vite + Vitest +
        TS），产出组件mdx文档，遵循内部设计规范，统一工作台交互，落地页面开发使用；
      </li>
      <li>利用设计、开发规范以及组件库，并根据业务需要沉淀一套快速开发单页面的开发模版；</li>
      <li>
        负责完成工单/运维人员/运维资产等业务需求，维护页面数量达80+，服务2000+运营/运维人员，利用技术降低人力成本和提高运营效率；
      </li>
    </ul>

    <div fbc mt-4>
      <h4 m-0>全局配置平台 @滴滴出行</h4>
      <div>前端PM</div>
      <div>2022年3月 -- 2022年7月</div>
    </div>
    <div>
      项目介绍：覆盖青桔单车/电单车业务线的配置平台
    </div>
    <div>
      技术栈：React + Formily + Antd + TS
    </div>
    <ul m0>
      <li>负责运营平台全局配置平台前端重构，采用Formily表单解决方案，搭建可视化表单搭建平台，同时推动在多个运营平台落地；</li>
      <li>该平台负责青桔单车/电单车业务中，以通用域方式支持服务端、运营侧快速配置，省去二次开发、发版等成本；</li>
      <li>
        使用可视化表单方案进行配置，覆盖50+的单车/电单车还车以及付款场景，助力配置类需求支持成本降低60\%，技术维护成本降低70\%，从而提升运营用户配置效率，降低人力成本;
      </li>
    </ul>

    <div fbc mt-4>
      <h4 m-0>D-Design @滴滴出行</h4>
      <div>前端开发</div>
      <div>2022年3月 -- 2022年8月</div>
    </div>
    <div>
      项目介绍：D-Design设计体系\&material物料体系，提供完整的中后台解决方案
    </div>
    <div>
      技术栈：React + Vue2 + Vue3
    </div>
    <ul m0>
      <li>参与开发D-Design for Vue2、Vue3、React基础组件库开发</li>
      <li>参与开发material-cli脚手架，核心实现了物料创建、物料编译、物料发布npm以及同步至物料平台的功能；</li>
      <li>产出ListPage (列表页)、Detail (详情)、TabBar (带右键菜单tab栏)、404页、无权限页等覆盖中后台全链路的基础物料库；</li>
    </ul>

    <div fbc mt-4>
      <h4 m-0>色纺供应链系统ERP @天时时尚</h4>
      <div>前端开发</div>
      <div>2019年10月 -- 2021年5月</div>
    </div>
    <div>
      项目介绍：一款色纺供应链系统
    </div>
    <div>
      技术栈：Vue2全家桶 + Element
    </div>
    <ul m0>
      <li>负责开发色纺供应链项目中的仓储、产品资料、客户信息系统，使用Vue2 + Element + Vuex + Vue Router编写</li>
      <li>推动公司前端组件库(Vite + Vue3 + Jest)搭建、测试用例落地；</li>
    </ul>

  </div>
}

export default Experiences