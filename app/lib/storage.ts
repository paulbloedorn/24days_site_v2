import { screeningRequests, type ScreeningRequest, type InsertScreeningRequest } from "@shared/schema";

export interface IStorage {
  getScreeningRequest(id: number): Promise<ScreeningRequest | undefined>;
  getAllScreeningRequests(): Promise<ScreeningRequest[]>;
  createScreeningRequest(request: InsertScreeningRequest): Promise<ScreeningRequest>;
}

export class MemStorage implements IStorage {
  private screeningRequests: Map<number, ScreeningRequest>;
  private currentId: number;

  constructor() {
    this.screeningRequests = new Map();
    this.currentId = 1;
  }

  async getScreeningRequest(id: number): Promise<ScreeningRequest | undefined> {
    return this.screeningRequests.get(id);
  }

  async getAllScreeningRequests(): Promise<ScreeningRequest[]> {
    return Array.from(this.screeningRequests.values());
  }

  async createScreeningRequest(insertRequest: InsertScreeningRequest): Promise<ScreeningRequest> {
    const id = this.currentId++;
    const request: ScreeningRequest = {
      id,
      name: insertRequest.name,
      email: insertRequest.email,
      organization: insertRequest.organization,
      screeningType: insertRequest.screeningType,
      eventDate: insertRequest.eventDate ?? null,
      attendeeCount: insertRequest.attendeeCount ?? null,
      message: insertRequest.message ?? null,
      createdAt: new Date(),
    };
    this.screeningRequests.set(id, request);
    return request;
  }
}

export const storage = new MemStorage();
