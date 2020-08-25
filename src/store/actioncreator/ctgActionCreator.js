// 切换分类
const SortToSceneAction = () => ({
  type : "SortToScene",
  payload: {
    sort: "scene"
  }
})

const SortToProAction = () => ({
  type : "SortToPro",
  payload: {
    sort: "pro"
  }
})

const SortToShopAction = () => ({
  type : "SortToShop",
  payload: {
    sort: "shop"
  }
})

export { SortToSceneAction, SortToProAction, SortToShopAction };
