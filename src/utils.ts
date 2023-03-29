const blackBishop = require( '../assets/chess_piece_2_black_bishop.png');
const blackKing = require( '../assets/chess_piece_2_black_king.png');
const blackKnight = require( '../assets/chess_piece_2_black_knight.png');
const blackPawn = require( '../assets/chess_piece_2_black_pawn.png');
const blackQueen = require( '../assets/chess_piece_2_black_queen.png');
const blackRook = require( '../assets/chess_piece_2_black_rook.png');
const whiteBishop = require( '../assets/chess_piece_2_white_bishop.png');
const whiteKing = require( '../assets/chess_piece_2_white_king.png');
const whiteKnight = require( '../assets/chess_piece_2_white_knight.png');
const whitePawn = require( '../assets/chess_piece_2_white_pawn.png');
const whiteQueen = require( '../assets/chess_piece_2_white_queen.png');
const whiteRook = require( '../assets/chess_piece_2_white_rook.png');

export const resetPosition = {
  AA: blackRook,
  AH: blackRook,
  AB: blackKnight,
  AG: blackKnight,
  AC: blackBishop,
  AF: blackBishop,
  AD: blackKing,
  AE: blackQueen,
  BA: blackPawn,
  BB: blackPawn,
  BC: blackPawn,
  BD: blackPawn,
  BE: blackPawn,
  BF: blackPawn,
  BG: blackPawn,
  BH: blackPawn,
  GA: whitePawn,
  GB: whitePawn,
  GC: whitePawn,
  GD: whitePawn,
  GE: whitePawn,
  GF: whitePawn,
  GG: whitePawn,
  GH: whitePawn,
  HA: whiteRook,
  HH: whiteRook,
  HB: whiteKnight,
  HG: whiteKnight,
  HC: whiteBishop,
  HF: whiteBishop,
  HD: whiteKing,
  HE: whiteQueen,
};

export const openingMoves = [
  {
    EE: whitePawn,
    GE: null,
  },
  {
    ED: whitePawn,
    GD: null,
  },
  {
    FF: whiteKnight,
    HG: null,
  },
  {
    EC: whitePawn,
    GC: null,
  },
  {
    FG: whitePawn,
    GG: null,
  },
];

export const openingMoveName = [
  `King's Pawn Opening`,
  `Queen's Pawn Opening`,
  `Réti Opening`,
  'English Opening',
  `King's Fianchetto Opening`,
];
