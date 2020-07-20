import { Notification} from 'element-ui'

// 弹框显示消息
export const notice = () => {
  Notification({
    title: 'HTML 片段',
    dangerouslyUseHTMLString: true,
    message: `<div>提示消息</div>`
  })
}