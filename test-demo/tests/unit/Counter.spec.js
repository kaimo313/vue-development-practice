import { mount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";
import sinon from "sinon";

describe("Counter.vue", () => {
	// 使用辅助函数库
	const change = sinon.spy();
	const wrapper = mount(Counter, {
		listeners: {
			change
		}
	});
	it("renders counter html", () => {
		// 生成快照，可以很方便的比对前后的 html
		expect(wrapper.html()).toMatchSnapshot();
	});
	it("count++", () => {
		// 找到按钮
		const button = wrapper.find("button");
		// 点击按钮
		button.trigger("click");
		// 判断值是否为1
		expect(wrapper.vm.count).toBe(1);
		// called:如果至少调用了一次间谍，则为 true
		expect(change.called).toBe(true);
		// 再次点击
		button.trigger("click");
		// callCount:通话录音的数量。
		expect(change.callCount).toBe(2);
	});
});
