// import { Injectable, NotFoundException } from '@nestjs/common';
// import { Board, BoardStatus } from './board-status.enum';
// import { v1 as uuid } from 'uuid';
// import { CreateBoardDto } from './dto/create-board.dto';
// 메모리 저장
import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { BoardRepository } from './board.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}

  // private boards: Board[] = [];
  // getAllBoards(): Board[] {
  //   return this.boards;
  // }
  // createBoaed(createBoardDto: CreateBoardDto) {
  //   const { title, description } = createBoardDto;
  //   const board: Board = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: BoardStatus.PUBLIC,
  //   };
  //   this.boards.push(board);
  //   return board;
  // }

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne({ where: { id } });

    if (!found) {
      throw new NotFoundException(`id ${id} 값이 없습니다.`);
    }

    return found;
  }
  // getboardById(id: string): Board {
  //   const found = this.boards.find((board) => board.id === id);
  //   if (!found) {
  //     throw new NotFoundException('원하는 아이디를 찾을 수 없습니다.');
  //   }
  //   return found;
  // }
  // deleteBoard(id: string): void {
  //   const found = this.getboardById(id);
  //   this.boards = this.boards.filter((board) => board.id !== found.id);
  // }
  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board = this.getboardById(id);
  //   board.status = status;
  //   return board;
  // }
}
