export interface Item {
  // primary id
  id: string;

  // 界面nodes 的schema
  pageSchema: string;

  // 创建时间
  createTime: string;

  // 创建用户
  createUser: string;

}


// 封装一个操作indexDB的类
class IndexedDBWrapper {
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
  public openDatabase(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const request = window.indexedDB.open(this.dbName, 1);

      request.onupgradeneeded = (event: Event) => {
        this.db = (event.target as IDBOpenDBRequest).result as IDBDatabase;
        this.db.createObjectStore(this.storeName, { keyPath: 'id' });
      };

      request.onsuccess = (event: Event) => {
        this.db = (event.target as IDBOpenDBRequest).result as IDBDatabase;
        resolve();
      };

      request.onerror = () => {
        reject((request as IDBRequest).error);
      };
    });
  }
  public addItem(item: Item): Promise<void> {

    const db = this.db

    if (!db) throw new Error("IndexedDBWrapper初始化失败")

    return new Promise<void>((resolve, reject) => {
      const transaction = db.transaction([this.storeName], 'readwrite');
      const objectStore = transaction.objectStore(this.storeName);
      const request = objectStore.add(item);

      request.onsuccess = () => {
        resolve();
      };

      request.onerror = () => {
        reject((request as IDBRequest).error);
      };

      transaction.oncomplete = () => {
        db.close();
      };
    });
  }

  public getAllItems(): Promise<Item[]> {

    const db = this.db

    if (!db) throw new Error("IndexedDBWrapper初始化失败")

    return new Promise<Item[]>((resolve, reject) => {
      const transaction = db.transaction([this.storeName], 'readonly');
      const objectStore = transaction.objectStore(this.storeName);
      const request = objectStore.getAll();

      request.onsuccess = () => {
        const items: Item[] = (request as IDBRequest<Item[]>).result;
        resolve(items);
      };

      request.onerror = () => {
        reject((request as IDBRequest).error);
      };

      transaction.oncomplete = () => {
        db.close();
      };
    });
  }

  public async deleteItem(itemId: string): Promise<boolean> {
    const db = this.db;

    if (!db) throw new Error("IndexedDBWrapper初始化失败");

    return new Promise<boolean>((resolve, reject) => {
      const transaction = db.transaction([this.storeName], 'readwrite');
      const objectStore = transaction.objectStore(this.storeName);
      const request = objectStore.delete(itemId);

      request.onsuccess = () => {
        resolve(true);
      };

      request.onerror = () => {
        reject((request as IDBRequest).error);
      };

      transaction.oncomplete = () => {
        db.close();
      };
    });
  }

}

/** 初始化数据库 */
const db = new IndexedDBWrapper('osmanthus', 'localHistory');
export const getLocalHistoryList = async () => {
  await db.openDatabase();
  const list = await db.getAllItems();
  return list;
}
export const setHistoryItem = async (record: Item) => {
  await db.openDatabase();
  const list = await db.addItem(record);
  return list;
}

export const deleteHistoryItem = async (id: string) => {
  await db.openDatabase()
  const data = await db.deleteItem(id)
  return data
}