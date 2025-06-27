import React from "react";
import './index.css'
import {useDocumentTitle} from '../../hooks'
export default function Trading() {
    useDocumentTitle('特定商取引法に基づく表記')
  return (
    <>
      <section className="px-8 py-16 max-w-5xl mx-auto">
        <div className="mt-16 text-center">
          <h1 className="text-3xl font-semibold mb-4">特定商取引法に基づく表記</h1>
          <table>
            <tbody>
            <tr>
              <th scope="row">运营会社</th>
              <td>株式会社京葉テクノロジー</td>
            </tr>
            <tr>
              <th scope="row">代表</th>
              <td>Helen He</td>
            </tr>
            <tr>
              <th scope="row">网址</th>
              <td>JC-Task (JapanCloud Task)日本云任务 www.jc-task.com</td>
            </tr>
            <tr>
              <th scope="row">公司地址</th>
              <td>260-0015千葉県千葉市中央区富士見1-14-13千葉大栄ビル8階</td>
            </tr>
            <tr>
              <th scope="row">产品名称</th>
              <td>JC-Task系统利用料金</td>
            </tr>
            <tr>
              <th scope="row">联系信息</th>
              <td>support@jc-task.com/ 050-3749-0567</td>
            </tr>
            <tr>
              <th scope="row">付款方式和付款期限</th>
              <td>
                信用卡（VISA / MASTER / JCB / AMEX / Diners）/银行转帐/ PayPal /
                微信支付/支付宝支付
              </td>
            </tr>
            <tr>
              <th scope="row">交货时间</th>
              <td>即时交货</td>
            </tr></tbody>
          </table>
        </div>
      </section>
    </>
  );
}
