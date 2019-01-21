/*
包含n个接口请求函数的模块
*/
import ajax from './ajax'

export const SERVER_URL = `/MulinArticle/`

export const BOSH_SERVICE = 'http://mlyjq.com/xmpp-httpbind/'

export const SERVER_DOMAIN = '@mlyjq.com'

// 获取二维码图片
export const getQrCode = () => ajax(`${SERVER_URL}GetQrCodeServlet`, {}, 'POST')

// 二维码验证登录
export const validateQrLogin = (uuid) => ajax(`${SERVER_URL}LongConnectionCheckServlet`, {uuid}, 'POST')

// 获取用户昵称
export const reqUserNick = (jid) => ajax(`${SERVER_URL}UserInfoServlet`, {jid}, 'POST')

// 获取圈
export const reqQuan = (jid) => ajax(`${SERVER_URL}QueryRoomsServlet`, {jid: jid + SERVER_DOMAIN}, 'POST')

// 获取有管理权限的圈
export const reqAdminQuan = (jid) => ajax(`${SERVER_URL}QueryAdminRoomsServlet`, {jid: jid + SERVER_DOMAIN}, 'POST')

// 大文章
// 保存文章
export const reqSaveArticle0 = ({headImg, title, roomId, context, creationDate, actType, username, subjectID, text, sequence, type, ganwuArticleId}) => ajax(`${SERVER_URL}SaveArticleServlet`, {headImg, title, roomId, context, creationDate, actType, username, subjectID, text, sequence, type, ganwuArticleId}, 'POST')

// 更新文章
export const reqUpdateArticle0 = ({activityID, articleMobileId, headImg, title, roomId, context, updateDate, actType, username, subjectID, text, sequence, type, ganwuArticleId}) => ajax(`${SERVER_URL}UpdateArticleServlet`, {activityID, articleMobileId, headImg, title, roomId, context, updateDate, actType, username, subjectID, text, sequence, type, ganwuArticleId}, 'POST')

// 获取大文章列表
export const reqQueryArticle0 = ({jid, roomId, title, pageNum, type, createDateFrom, createDateTo, actType}) => ajax(`${SERVER_URL}QueryReleaseArticleServlet`, {jid, roomId, title, pageNum, type, createDateFrom, createDateTo, actType}, 'POST')

// 获取大文章详情页
export const reqQueryArticleContent0 = ({articleId, type, addCount, isArt}) => ajax(`${SERVER_URL}QueryReleaseArticleContentServlet`, {articleId, type, addCount, isArt}, 'POST')

// 更新文章状态
export const reqUpdateArticleStatus = ({activityID, type}) => ajax(`${SERVER_URL}UpdateArticleServlet`, {activityID, type}, 'POST')

// 获取进度条
export const reqProgress = () => ajax(`${SERVER_URL}ProgressServlet`)

// 删除大文章
export const reqDelArticle = ({jid, activityID, muactivityID, delDate, type}) => ajax(`${SERVER_URL}DelArticleServlet`, {jid, activityID, muactivityID, delDate, type}, 'POST')

// 活动
// 保存活动
export const reqSaveArticle1 = ({headImg,
  title,
  roomId,
  context,
  creationDate,
  actType,
  username,
  subjectID,
  text,
  sequence,
  type,
  mark8,
  startDate,
  endDate,
  artAddr,
  artNum,
  favorite,
  signtype,
  mark1,
  mark2,
  mark3,
  mark4,
  mark5
}) => ajax(`${SERVER_URL}SaveArticleServlet`, {headImg,
  title,
  roomId,
  context,
  creationDate,
  actType,
  username,
  subjectID,
  text,
  sequence,
  type,
  mark8,
  startDate,
  endDate,
  artAddr,
  artNum,
  favorite,
  signtype,
  mark1,
  mark2,
  mark3,
  mark4,
  mark5
}, 'POST')

// 更新活动
export const reqUpdateArticle1 = ({activityID,
  articleMobileId,
  headImg,
  title,
  roomId,
  context,
  updateDate,
  actType,
  username,
  subjectID,
  text,
  sequence,
  type,
  mark8,
  startDate,
  endDate,
  artAddr,
  artNum,
  favorite,
  signtype,
  mark1,
  mark2,
  mark3,
  mark4,
  mark5
}) => ajax(`${SERVER_URL}UpdateArticleServlet`, {activityID,
  articleMobileId,
  headImg,
  title,
  roomId,
  context,
  updateDate,
  actType,
  username,
  subjectID,
  text,
  sequence,
  type,
  mark8,
  startDate,
  endDate,
  artAddr,
  artNum,
  favorite,
  signtype,
  mark1,
  mark2,
  mark3,
  mark4,
  mark5
}, 'POST')

// 获取活动列表
export const reqQueryArticle1 = ({jid, roomId, title, pageNum, type, createDateFrom, createDateTo, actType}) => ajax(`${SERVER_URL}QueryActivityServlet`, {jid, roomId, title, pageNum, type, createDateFrom, createDateTo, actType}, 'POST')

// 获取报名列表
export const reqSignInfo = ({username, nickname, signtype, muactivityID, pageNum}) => ajax(`${SERVER_URL}QuerySignInfoServlet`, {username, nickname, signtype, muactivityID, pageNum}, 'POST')

// 更新报名状态
export const reqUpdateSignType = ({userinfoId, issignup}) => ajax(`${SERVER_URL}UpdateSignTypeServlet`, {userinfoId, issignup}, 'POST')

// 获取活动报名用户打印列表
export const reqQueryPrintUser = ({muactivityID}) => ajax(`${SERVER_URL}QueryPrintUserServlet`, {muactivityID}, 'POST')

// 获取可以发布活动总结的活动列表
export const reqQueryJoinActivity = ({jid, title, pageNum}) => ajax(`${SERVER_URL}QueryJoinActivityServlet`, {jid, title, pageNum}, 'POST')

// 主题
// 获取主题列表
export const reqQueryTheme = ({jid, title, pageNum, type}) => ajax(`${SERVER_URL}QueryTheme`, {jid, title, pageNum, type}, 'POST')

// 删除主题
export const reqDelTheme = ({themeId, jid}) => ajax(`${SERVER_URL}DelThemeServlet`, {themeId, jid}, 'POST')

// 添加主题
export const reqAddTheme = ({jid, type, title, desc, question, imgUrl, favorites, themeId}) => ajax(`${SERVER_URL}ThemeServlet`, {jid, type, title, desc, question, imgUrl, favorites, themeId}, 'POST')

// 查询主题详情
export const reqQueryThemeContent = ({jid, themeId}) => ajax(`${SERVER_URL}QueryThemeContentServlet`, {jid, themeId}, 'POST')
