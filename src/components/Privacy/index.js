import React from "react";
import './index.css'
import {useDocumentTitle} from '../../hooks'
export default function Privacy() {
    useDocumentTitle('Privacy Policy')
  return (
    <>
      <section className="px-8 py-16 max-w-5xl mx-auto">
        <div className="mt-16 text-center">
          <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
          <p>
            {" "}
            JC-Task (JapanCloud
            Task)日本云任务（以下称“我们”或“JC-Task平台”或“JC-Task”）非常重视用户的隐私和个人信息保护。您在使用我们的产品与/或服务时，我们可能会收集和使用您的相关信息。我们希望通过《JC-Task
            隐私条款》（”本隐私条款”）向您说明我们在您使用我们的产品与/或服务时如何收集、使用、保存、共享和转让这些信息。
          </p>
          <p>
            本隐私条款与您所使用的JC-Task以及该服务所包括的各种业务功能（以下统称”我们的产品与/或服务”）息息相关，希望您在使用我们的产品与/或服务前仔细阅读并确认您已经充分理解本条款所写明的内容，并让您可以按照本隐私条款的指引做出您认为适当的选择。您使用或在我们更新本隐私条款后（我们会及时提示您更新的情况）继续使用我们的产品与/或服务，即意味着您同意本隐私条款(含更新版本)内容，并且同意我们按照本隐私条款收集、使用、保存和共享您的相关信息。
          </p>
          <h2 className="text font-semibold mb-4">
            {" "}
            一、我们如何收集和使用您的个人信息
          </h2>
          <p>
            为了向您提供服务、优化我们的服务以及保障账号安全，我们会按照如下方式收集、使用您的个人信息：
          </p>
        </div>
      </section>
    </>
  );
}
