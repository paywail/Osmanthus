export interface IHistoryItem {
  // primary id
  id: number;

  // 界面nodes 的schema
  pageSchema: string;

  // 创建时间
  createTime: string;

  // 创建用户
  createUser: string;

}
const Model = {
  tableName: 'hisotry',
  columns: {
    id: '++id', // 唯一id，作为主键
    htmlBody: 'string', // 存放页面schema
    createTime: 'string', // 创建时间
    user: 'string', // 创建用户
  },
};

// 分装一个操作indexDB的类
class IndexDBWrappeo {
  private db: IDBDatabase | null;
  /** 数据库的名称 */
  private dbName: string;
  /** 存储对象（表）的名称 */
  private storeName: string;
  constructor(dbName: string, storeName: string) {
    this.db = null;
    this.dbName = dbName;
    this.storeName = storeName;
  }



}