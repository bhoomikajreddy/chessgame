import { PieceType, TeamType, Piece } from "../components/Chessboard/Chessboard";

export default class Referee {
    tileIsOcuupied(x: number, y: number, boardState: Piece[]): boolean {
        console.log("Checkinh if tile occupied...");

        return true;
    }
    isValidMove(
        px: number, 
        py: number, 
        x: number, 
        y: number, 
        type: PieceType, 
        team: TeamType, 
        boardState: Piece
        ) {
        console.log("Referee is checking the move...");
        console.log(`Previous location: (${px}, ${py})`);
        console.log(`Current location: (${x}, ${y})`);
        console.log(`Piece type: ${type}`);
        console.log(`Team: ${team}`);

        if(type === PieceType.PAWN) {
            if(team === TeamType.OUR) {
                if(py === 1) {
                    if(px === x && y - py === 1) {
                        if(!this.tileIsOcuupied(x, y, boardState)) {
                            return true;
                        }
                    }
                    else if(px === x && y - py === 2) {
                        if(!this.tileIsOcuupied(x, y, boardState) && !this.tileIsOcuupied(x, y-1, boardState)) {
                            return true;
                        }
                    }
                } else {
                    if(px === x && y - py === 1) {
                        if(!this.tileIsOcuupied(x, y, boardState)) {
                            return true;
                        }
                    }
                }
            } else {
            if(py === 6) {
                if(px === x && (y - py === -1 || y - py === -2)) {
                    return true;
                }
            }
                else {
                    if(px === x && y - py === -1) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
}