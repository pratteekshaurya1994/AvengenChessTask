import React, {useState} from 'react';
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Block from './Block';
import {resetPosition, openingMoves, openingMoveName} from './utils';

const ChessBoard = () => {
  // Initialize state variables
  const [position, setPosition] = useState<any>(resetPosition); // Position of the pieces on the board
  const [moveName, setMoveName] = useState<String>(''); // Name of the opening move

  // Reset the board to the starting position
  const resetBoard = () => {
    setPosition(resetPosition);
    setMoveName('');
  };

  // Initialize state variable to keep track of the previous random move
  const [prevRandom, setPrevRandom] = useState(-1);

  // Select a random opening move and set the position of the pieces on the board accordingly
  const randomMove = () => {
    let random: number;
    do {
      random = Math.floor(Math.random() * openingMoves.length);
    } while (random === prevRandom);

    setPrevRandom(random);

    const name = openingMoveName[random];
    setMoveName(name);
    setPosition({...resetPosition, ...openingMoves[random]});
  };

  // Determine if a given number is even
  const isEven = (num: any) => num % 2 === 0;

  // Render the chess board
  const renderBoard = () => {
    const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    return columns.map((column, i) => {
      // Render the blocks in each column
      const blockRows = Array.from({length: 8}).map((_, j) => {
        // Generate an ID for each block based on its position on the board
        const id =
          String.fromCharCode(j + 1 + 64) + String.fromCharCode(i + 1 + 64);

        // Determine the background color and lighting for the block
        const backgroundColor =
          (isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j))
            ? '#BEBEBE'
            : '#696969';
        const lighting =
          (isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j)) ? 0.4 : 0.7;

        // Render the block with the appropriate background color and piece image
        return (
          <Block
            key={id}
            style={[styles.block, {backgroundColor, shadowOpacity: lighting}]}
            source={position[id]}
          />
        );
      });

      // Render the column with its squares and label
      return (
        <View key={column}>
          <View style={styles.label}>
            <Text style={styles.labelText}>{column}</Text>
          </View>
          {blockRows}
          <View style={styles.label}>
            <Text style={styles.labelText}>{column}</Text>
          </View>
        </View>
      );
    });
  };

  // Render the row labels (numbers)
  const renderRowLabels = () =>
    Array.from({length: 8}).map((_, i) => {
      const label = 8 - i;
      return (
        <View key={label} style={styles.label}>
          <Text style={styles.labelText}>{label}</Text>
        </View>
      );
    });

  // Render the entire chess board with buttons and move name display
  return (
    <View style={styles.container}>
      <View style={styles.board}>
        <View style={[styles.column, styles.rowLabels]}>
          {renderRowLabels()}
        </View>
        {renderBoard()}
        <View style={[styles.column, styles.rowLabels]}>
          {renderRowLabels()}
        </View>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={randomMove}>
          <Text style={styles.buttonText}>Random Move</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={resetBoard}>
          <Text style={styles.buttonText}>Reset Board</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.moveName}>{moveName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3e3e3e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  board: {
    flexDirection: 'row',
    backgroundColor: '#141414',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 5,
    borderColor: '#ffa600',
    marginBottom: 20,
    elevation: 10,
    shadowColor: '#ffa600',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  column: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowLabels: {
    width: Dimensions.get('window').width / 18,
  },
  block: {
    width: Dimensions.get('window').width / 9,
    height: Dimensions.get('window').width / 9,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ffa600',
  },
  label: {
    width: Dimensions.get('window').width / 9,
    height: Dimensions.get('window').width / 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelText: {
    color: '#ffa600',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#ffa600',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    elevation: 5,
    shadowColor: '#ffa600',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#141414',
  },
  moveName: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffa600',
  },
});
export default ChessBoard;
