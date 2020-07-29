var ROWS = 7;
var COLUMNS = 19;
var MIN_COLOR = 0;
var MAX_COLOR = 132;

var COLORS = {
    0:   '#ffffff',
    1:   '#ffd4bf',
    2:   '#ffe9bf',
    3:   '#ffffbf',
    4:   '#e9ffbf',
    5:   '#d4ffbf',
    6:   '#bfffbf',
    7:   '#bfffd4',
    8:   '#bfffe9',
    9:   '#bfffff',
    10:  '#bfe9ff',
    11:  '#bfd4ff',
    12:  '#bfbfff',
    13:  '#d4bfff',
    14:  '#e9bfff',
    15:  '#ffbfff',
    16:  '#ffbfe9',
    17:  '#ffbfd4',
    18:  '#ffbfbf',
    19:  '#dadada',
    20:  '#bf9f8f',
    21:  '#bfaf8f',
    22:  '#bfbf8f',
    23:  '#afbf8f',
    24:  '#9fbf8f',
    25:  '#8fbf8f',
    26:  '#8fbf9f',
    27:  '#8fbfaf',
    28:  '#8fbfbf',
    29:  '#8fafbf',
    30:  '#8f9fbf',
    31:  '#8f8fbf',
    32:  '#9f8fbf',
    33:  '#af8fbf',
    34:  '#bf8fbf',
    35:  '#bf8faf',
    36:  '#bf8f9f',
    37:  '#bf8f8f',
    38:  '#b6b6b6',
    39:  '#bf7f5f',
    40:  '#bf9f5f',
    41:  '#bfbf5f',
    42:  '#9fbf5f',
    43:  '#7fbf5f',
    44:  '#5fbf5f',
    45:  '#5fbf7f',
    46:  '#5fbf9f',
    47:  '#5fbfbf',
    48:  '#5f9fbf',
    49:  '#5f7fbf',
    50:  '#5f5fbf',
    51:  '#7f5fbf',
    52:  '#9f5fbf',
    53:  '#bf5fbf',
    54:  '#bf5f9f',
    55:  '#bf5f7f',
    56:  '#bf5f5f',
    57:  '#919191',
    58:  '#bf6a3f',
    59:  '#bf943f',
    60:  '#bfbf3f',
    61:  '#94bf3f',
    62:  '#6abf3f',
    63:  '#3fbf3f',
    64:  '#3fbf6a',
    65:  '#3fbf94',
    66:  '#3fbfbf',
    67:  '#3f94bf',
    68:  '#3f6abf',
    69:  '#3f3fbf',
    70:  '#6a3fbf',
    71:  '#943fbf',
    72:  '#bf3fbf',
    73:  '#bf3f94',
    74:  '#bf3f6a',
    75:  '#bf3f3f',
    76:  '#6d6d6d',
    77:  '#ff5500',
    78:  '#ffaa00',
    79:  '#ffff00',
    80:  '#aaff00',
    81:  '#54ff00',
    82:  '#00ff00',
    83:  '#00ff55',
    84:  '#00ffa9',
    85:  '#00ffff',
    86:  '#00a9ff',
    87:  '#0054ff',
    88:  '#0000ff',
    89:  '#5400ff',
    90:  '#aa00ff',
    91:  '#ff00ff',
    92:  '#ff00aa',
    93:  '#ff0055',
    94:  '#ff0000',
    95:  '#484848',
    96:  '#bf3f00',
    97:  '#bf7f00',
    98:  '#bfbf00',
    99:  '#7fbf00',
    100: '#3fbf00',
    101: '#00bf00',
    102: '#00bf3f',
    103: '#00bf7f',
    104: '#00bfbf',
    105: '#007fbf',
    106: '#003fbf',
    107: '#0000bf',
    108: '#3f00bf',
    109: '#7f00bf',
    110: '#bf00bf',
    111: '#bf007f',
    112: '#bf003f',
    113: '#bf0000',
    114: '#242424',
    115: '#7f2a00',
    116: '#7f5500',
    117: '#7f7f00',
    118: '#557f00',
    119: '#2a7f00',
    120: '#007f00',
    121: '#007f2a',
    122: '#007f54',
    123: '#007f7f',
    124: '#00547f',
    125: '#002a7f',
    126: '#00007f',
    127: '#2a007f',
    128: '#55007f',
    129: '#7f007f',
    130: '#7f0055',
    131: '#7f002a',
    132: '#7f0000'
}

export { ROWS, COLUMNS, MIN_COLOR, MAX_COLOR, COLORS };
