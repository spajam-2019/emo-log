//聞き手ユーザーのクラス
module.exports = class MoyaMoyaListener {

    constructor(id) {
        this.id = id;
        this.isMoyaMoya = false;
    }

    get Id() { return this.id }
    set IsMoyaMoya(val) { this.isMoyaMoya = val }
    get IsMoyaMoya() { return this.isMoyaMoya }

}