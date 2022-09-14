<template>
  <div class="border">
    <h1>A 结点</h1>
    <button @click="getHRef">获取子孙节点 E Ref</button>
    <ChildrenB />
    <ChildrenC />
    <ChildrenD />
  </div>
</template>
<script>
import ChildrenB from "./ChildrenB";
import ChildrenC from "./ChildrenC";
import ChildrenD from "./ChildrenD";
export default {
  components: {
    ChildrenB,
    ChildrenC,
    ChildrenD
  },
  provide() {
    return {
      setChildrenRef: (name, ref) => {
        console.log("A 组件 setChildrenRef", name);
        this[name] = ref;
      },
      getChildrenRef: name => {
        console.log("A 组件 getChildrenRef", name);
        return this[name];
      },
      getRef: () => {
        console.log("A 组件 getRef");
        return this;
      }
    };
  },
  data() {
    return {
      color: "blue"
    };
  },
  methods: {
    getHRef() {
      console.log(this.childrenE);
    }
  }
};
</script>
