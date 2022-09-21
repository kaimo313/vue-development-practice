import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

// 测试 HelloWorld.vue 组件
// describe 定义一个测试集
describe("HelloWorld.vue", () => {
  // it 单元测试最小集
  it("renders props.msg when passed", () => {
    const msg = "new message";
    // Vue Test Utils 允许你通过 shallowMount 方法只挂载一个组件而不渲染其子组件 (即保留它们的存根)
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    // 断言
    expect(wrapper.text()).toMatch(msg);
  });
});
