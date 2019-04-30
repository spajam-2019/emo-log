//もやもやしている聞き手の割合を計測する
module.exports = class MoyaMoyaMeasurement {

    constructor() {
        this.listenerMap = {}
    }

    //新しいリスナーの追加
    AddListener(listenerId, listener) { this.listenerMap[listenerId] = listener }
    //リスナーの削除
    RemoveListener(listenerId) { delete this.listenerMap[listenerId] }

    //モヤモヤ度の取得
    GetMoyaMoyaLevel() {
        const listeners = Object.values(this.listenerMap);
        const moyamoyaCount = listeners.map(x => x.IsMoyaMoya ? 1 : 0)
            .reduce((acc, x) => acc + x);
        return moyamoyaCount / listeners.length
    }

}