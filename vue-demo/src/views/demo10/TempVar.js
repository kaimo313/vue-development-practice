export default {
  functional: true,
  render: (h, ctx) => {
    console.log(ctx);
    return ctx.scopedSlots.default && ctx.scopedSlots.default(ctx.props || {});
  }
};
