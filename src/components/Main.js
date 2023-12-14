import React from 'react'

import weixin from '../images/wx.jpg'
const data = [
  { title: '有尿床史，幼儿园，不治自愈' },
  {
    title: '有休学史，小学，不请自回',
    link: '//blog.yangerxiao.com/posts/memory-about-bookstore'
  },
  {
    title: '有学霸史，中学，不攻自破',
    link: '//blog.yangerxiao.com/posts/memory-about-bookstore'
  },
  {
    title: '有平庸史，高中，不愠不火',
    link: '//blog.yangerxiao.com/posts/memory-about-bookstore'
  },
  {
    title: '有沉淀史，大学，不骄不躁',
    link: '//blog.yangerxiao.com/posts/memory-about-bookstore'
  },
  {
    title: '有骑行史，毕业，不同凡响',
    link: '//blog.yangerxiao.com/posts/graduate-riding-part-one'
  },
  {
    title: '有搭车史，回家，不期而遇',
    link: '//blog.yangerxiao.com/posts/lift-part-one'
  },
  {
    title: '有阅读史，至今，不求甚解',
    link: 'https://book.douban.com/people/yanggc/collect'
  },
  {
    title: '有跑步史，至今，不屈不挠',
    link: '//blog.yangerxiao.com/posts/about-running'
  },
  {
    title: '有摄影史，至今，不甚了了'
  },
  {
    title: '有观影史，至今，不胜枚举',
    link: 'https://movie.douban.com/people/yanggc/collect'
  },
  {
    title: '有编码史，至今，不甘雌伏'
  }
]
class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        {/* 关于我 */}
<article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h1 className="major">关于我</h1>

          <h2>基本信息</h2>
          <p>摄影/AI人工智能</p>



          {close}
        </article>
      </div>
    )
  }
}

export default Main
