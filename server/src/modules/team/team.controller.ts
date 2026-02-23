import { Request, Response } from "express";
import return500status from "../../scripts/return500status";
import { CreateTeamInput } from "./team.validation";
import { teamService } from "./team.service";

class TeamController {
  async addTeamMember(req: Request<{}, {}, CreateTeamInput>, res: Response) {
    try {
      const teamMemberData = req.body;
      const file = req.file;

      if (!file) {
        return res.status(400).json({ message: "Members image is required" });
      }

      const member = await teamService.create(teamMemberData, file);
      if (!member) {
        return return500status({ message: "Failed to add team member", res });
      }
      return res.status(201).json({
        success: true,
        message: "Team member added successfully",
        data: member,
      });
    } catch (error: any) {
      return return500status({ res, message: error.message });
    }
  }

  async getTeamMembers(req: Request, res: Response) {
    try {
      const members = await teamService.getAll();
      return res.status(200).json({
        success: true,
        message: "Team members retrieved successfully",
        data: members,
      });
    } catch (error: any) {
      return return500status({ res, message: error.message });
    }
  }

  async deleteTeamMember(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (!id) {
        return res.status(400).json({ message: "Team member ID is required" });
      }
      const deleted = await teamService.delete(id);
      if (!deleted) {
        return return500status({
          message: "Failed to delete team member",
          res,
        });
      }
      return res.status(200).json({
        success: true,
        message: "Team member deleted successfully",
      });
    } catch (error: any) {
      return return500status({ res, message: error.message });
    }
  }
}

export const teamController = new TeamController();
