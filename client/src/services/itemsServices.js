import * as fetcher from "../utils/fetcher";

const baseUrl = "http://localhost:30303/hives";

export function create(number, location, description, condition, user) {
  try {
    let data = { number, location, description, condition };

    let request = fetcher.post(baseUrl, data, user);

    return request;
  } catch (error) {
    console.log(error);
  }
}

export function getAll() {
  try {
    let hives = fetcher.get(baseUrl);

    return hives;
  } catch (error) {
    console.log(error);
  }
}

export function getOne(hiveId) {
  try {
    let hive = fetcher.get(baseUrl + `/${hiveId}`);

    return hive;
  } catch (error) {
    console.log(error);
  }
}

export function removeHive(hiveId) {
  try {
    let removed = fetcher.remove(baseUrl + `/${hiveId}`);

    return removed;
  } catch (error) {
    console.log(error);
  }
}

export function edit(hiveId, data) {
  try {
    console.log(data, 'from services');
    let edited = fetcher.put(baseUrl + `/${hiveId}`, data);

    return edited;
  } catch (error) {
    console.log(error);
  }
}
