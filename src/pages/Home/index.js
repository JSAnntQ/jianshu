import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  Homewarpper,
  Banner,
  Homeleft,
  HomeRight,
  Boardwrapper,
  BoardItem,
  Downloadewm,
  Ewmimg,
  Ewminfo,
  Morewrapper,
  Listcontainer,
  Splitline,
  Listitem,
  Listitemimg,
  Listitemcontent,
  Listtitle,
  Itemcontent,
  Listitemmeta,
  Recommendedauthors
} from "./style";

class Home extends PureComponent {
  render() {
    return (
      <Homewarpper>
        <Homeleft>
          <Banner
            src="http://upload.jianshu.io/admin_banners/web_images/4582/2db83cc6f08d13c2f83002238ca32b784266c4fb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt="banner"
          />
          <Splitline />
          <Listcontainer>
            {[1, 2, 3, 5, 6, 7, 8].map((item, index) => {
              return (
                <Listitem key={index}>
                  <Listitemimg
                    src="https://oimagea2.ydstatic.com/image?id=4261735699870254161&product=adpublish&w=300&h=200&sc=0&rm=2&gsb=0&gsbd=60"
                    alt="120"
                  />
                  <Listitemcontent>
                    <Listtitle>
                      35岁程序员裸辞两月，找不到工作，感慨程序员是碗青春饭！
                    </Listtitle>
                    <Itemcontent>
                      现在是开学之初，风华正茂的青年才俊们应该已经在图书馆占好了座位，开始备战
                      12 月份的英语四六级考试了吧！想当年，pk
                      哥四级考试前也在图书馆待...
                    </Itemcontent>
                    <Listitemmeta>JSAnntQ | 信息：88 | 点赞：99</Listitemmeta>
                  </Listitemcontent>
                </Listitem>
              );
            })}
          </Listcontainer>
        </Homeleft>
        <HomeRight>
          <Boardwrapper>
            <BoardItem
              src="http://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png"
              alt="Banner s 3"
            />
            <BoardItem
              src="http://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"
              alt="Banner s 4"
            />
            <BoardItem
              src="http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
              alt="Banner s 7"
            />
            <BoardItem
              src="http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
              alt="Banner s 5"
            />
            <BoardItem
              src="http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
              alt="Banner s 6"
            />
          </Boardwrapper>
          <Downloadewm>
            <Ewmimg
              src="http://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"
              alt="Download index side qrcode"
            />
            <Ewminfo>
              <p>下载简书手机App ></p>
              <p>随时随地发现和创作内容</p>
            </Ewminfo>
          </Downloadewm>
          <Recommendedauthors />
          <Recommendedauthors />
          <Morewrapper>查看全部 ></Morewrapper>
        </HomeRight>
      </Homewarpper>
    );
  }
}

const mapSateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapSateToProps,
  mapDispatchToProps
)(Home);
