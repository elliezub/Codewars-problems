let isAnagram = function(s, t) {
    if (s.length != t.length) {
        return false;
    }

    const sortS = s.split('').sort().join('').toLowerCase();
    const sortT = t.split('').sort().join('').toLowerCase();

    return sortS === sortT;
};

console.log(isAnagram("rat", "car"));