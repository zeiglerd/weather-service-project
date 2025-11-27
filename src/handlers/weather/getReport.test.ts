import express, { Request, Response } from "express";
import { beforeEach, describe, expect, it, vi } from "vitest";
import axios from "../../utils/axios.js";
import getReport from "./getReport.js";

describe("getReport handler", () => {
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response>;
  let jsonMock: ReturnType<typeof vi.fn>;
  let statusMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    const app = express();

    mockReq = { params: { lat: "", long: "" } };
    mockRes = { ...app.response };

    jsonMock = vi.fn();
    statusMock = vi.fn().mockReturnValue(mockRes);

    mockRes.json = jsonMock as any;
    mockRes.status = statusMock as any;
  });

  it("should get the weather report for Union, MO.", async () => {
    const mockGetGridpoints = {
      data: {
        properties: {
          gridId: "LSX",
          gridX: "67",
          gridY: "65",
        },
      },
    };

    const mockGetForecast = {
      data: {
        properties: {
          periods: [
            {
              shortForecast: "Mostly Cloudy",
              temperature: 28,
              temperatureUnit: "F",
            },
          ],
        },
      },
    };

    vi.spyOn(axios, "get")
      .mockResolvedValueOnce(mockGetGridpoints)
      .mockResolvedValueOnce(mockGetForecast);

    mockReq = { params: { lat: "38.4501", long: "-91.0085" } };

    await getReport(mockReq as Request, mockRes as Response);

    expect(mockRes.json).toHaveBeenCalledWith({
      characterization: "cold",
      shortForecast: "Mostly Cloudy",
    });
  });
});
