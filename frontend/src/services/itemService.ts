import api from "./api";
import type { Item } from "../types";

interface ItemFilters {
  category?: string;
  condition?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  sort?: string;
}

export const itemService = {
  async getItems(filters?: ItemFilters): Promise<Item[]> {
    const response = await api.get<Item[]>("/items", { params: filters });
    return response.data;
  },

  async getItemById(id: string): Promise<Item> {
    const response = await api.get<Item>(`/items/${id}`);
    return response.data;
  },

  async createItem(
    data: Partial<Item>
  ): Promise<{ message: string; item: Item }> {
    const response = await api.post("/items", data);
    return response.data;
  },

  async updateItem(
    id: string,
    data: Partial<Item>
  ): Promise<{ message: string; item: Item }> {
    const response = await api.put(`/items/${id}`, data);
    return response.data;
  },

  async deleteItem(id: string): Promise<{ message: string }> {
    const response = await api.delete(`/items/${id}`);
    return response.data;
  },
};

export default itemService;
