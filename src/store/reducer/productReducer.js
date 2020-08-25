import { PROD, ADD, SUB, CCG, CIG, TCAL, Del } from "../actionTypes";
const defaultState = {
  product_list: [], // 用户购物车列表
  totalPrice: 0, // 总价
  checkedNum: 0, // 已选中
  totalChecked: false, // 全选
};
export default (state = defaultState, action) => {
  let newProduct_list = JSON.parse(JSON.stringify(state));
  // 计算总价 计算所有被选中商品的价格
  function total() {
    // 总价
    newProduct_list.totalPrice = 0;
    // 已选中
    newProduct_list.checkedNum = 0;
    newProduct_list.product_list.map((v) => {
      // console.log(v.wdata)
      v.wdata.map((v) => {
        // console.log(v);
        newProduct_list.totalPrice +=
          v.checked === true ? v.product_count * v.product_price : 0;
        newProduct_list.checkedNum += v.checked === true ? 1 : 0;
      });
    });
    // console.log(newProduct_list.totalPrice);
  }

  switch (action.type) {
    case PROD:
      newProduct_list.totalChecked = false;
      newProduct_list.product_list = action.payload.productList;
      break;
    case ADD:
      var shop = newProduct_list.product_list[action.payload.shopIndex];
      var product = shop.wdata[action.payload.productIndex];
      product.product_count += action.payload.step;
      // console.log(product.product_count);

      total();
      break;
    case SUB:
      var shop = newProduct_list.product_list[action.payload.shopIndex];
      var product = shop.wdata[action.payload.productIndex];
      // console.log(product.product_count);
      // 数量减到一 不进行操作
      if (product.product_count <= 1) break;
      product.product_count += action.payload.step;
      // console.log(product.product_count);

      total();
      break;
    // console.log(action.payload.productIndex)
    // 店铺全选
    case CCG:
      var shop = newProduct_list.product_list[action.payload.shopIndex];
      var products = shop.wdata;
      shop.checkedAll = !shop.checkedAll;
      // products.checked = shop.checkedAll;
      products.forEach((v, i) => {
        products[i].checked = shop.checkedAll;
      });
      total();

      // console.log(newProduct_list.product_list);
      for (let i in newProduct_list.product_list) {
        // console.log(newProduct_list.product_list[i]);
        if (newProduct_list.product_list[i].checkedAll) {
          newProduct_list.totalChecked = true;
        } else {
          newProduct_list.totalChecked = false;
          break;
        }
      }
      // newProduct_list.product_list.map((v) => {
      //   if (v.checkedAll) {
      //     newProduct_list.totalChecked = true;
      //   } else {
      //     newProduct_list.totalChecked = false;
      //     return;
      //   }
      // });

      break;
    // 商品选项
    case CIG:
      var shop = newProduct_list.product_list[action.payload.shopIndex];
      var products = shop.wdata;
      var product = shop.wdata[action.payload.productIndex];
      product.checked = !product.checked;
      // 只要有一个没选中 店铺全选就为false
      for (let i in products) {
        if (products[i].checked) {
          shop.checkedAll = true;
          newProduct_list.totalChecked = shop.checkedAll;
        } else {
          shop.checkedAll = false;
          newProduct_list.totalChecked = shop.checkedAll;
          break;
        }
      }
      total();
      // products.map((v, i) => {
      // });
      // console.log(shop.checkedAll);
      break;
    case TCAL:
      newProduct_list.totalChecked = !newProduct_list.totalChecked;
      // console.log(newProduct_list.totalChecked);
      newProduct_list.product_list.map((v) => {
        v.checkedAll = newProduct_list.totalChecked;
        v.wdata.map((v) => {
          // console.log(v);
          v.checked = newProduct_list.totalChecked;
        });
        // console.log(v.wdata);
      });
      total();
      break;
    case Del:
      // console.log(newProduct_list.product_list[action.payload.shopIndex].wdata)
      newProduct_list.product_list[action.payload.shopIndex].wdata.splice(
        action.payload.productIndex,
        1
      );
      if (
        newProduct_list.product_list[action.payload.shopIndex].wdata.length ===
        0
      ) {
        newProduct_list.product_list.splice(action.payload.shopIndex, 1);
      }
      // 这里打印会报错, 因为删除到最后 wdata 已经没有了
      // console.log(newProduct_list.product_list[action.payload.shopIndex].wdata.length)
      break;
  }
  // console.log(newProduct_list)
  return newProduct_list;
};
