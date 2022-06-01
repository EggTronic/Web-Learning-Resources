/** 断言 **/

/** mock 模块 **/ 
jest.mock('module', () => ({
    // 无需mock模块直接引入
    ...jest.requireActual('module').default,
    // 覆盖模块方法
    moduleFunctionA: () => {}
}));