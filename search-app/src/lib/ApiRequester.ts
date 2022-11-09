import axios from "axios";
import { Sick } from "./RecommandedData";
import dayjs from "dayjs";

interface CacheNode {
  data: Sick[];
  expireAt: Date;
}

const cacheStorage = new Map<string, CacheNode>();

export async function requestAPI(keyword: string): Promise<Sick[]> {
  const cacheNode = findFromCache(keyword);
  if (cacheNode) {
    console.log("cachee hit!");
    return cacheNode.data;
  }

  const fetchResult = await (
    await axios.get<Sick[]>(`http://localhost:4000/sick?q=${keyword}`)
  ).data;

  const expireAt = dayjs(new Date()).add(5, "minute").toDate();

  cacheStorage.set(keyword, {
    data: fetchResult,
    expireAt,
  });

  return fetchResult;
}

function findFromCache(keyword: string): CacheNode | null {
  //  캐시된 데이터가 존재하지 않는다면...
  if (!cacheStorage.has(keyword)) {
    return null;
  }

  const cacheNode = cacheStorage.get(keyword);

  //  캐시 노드를 이용할 수 없다면...
  if (!cacheNode) {
    return null;
  }

  //   더 이상 유효한 캐시가 아니라면...
  if (cacheNode.expireAt < new Date()) {
    return null;
  }

  return cacheNode;
}
