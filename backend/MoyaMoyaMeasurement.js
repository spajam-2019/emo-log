//もやもやしている聞き手の割合を計測する
module.exports = class MoyaMoyaMeasurement {

    constructor() {
        this.listenerMap = {}
    }

    //新しいリスナーの追加
    AddListener(listenerId, listener) { this.listenerMap[listenerId] = listener }
    //リスナーの削除
    RemoveListener(listenerId) { delete this.listenerMap[listenerId] }

    //モヤモヤしてる人数取得
    GetMoyaMoyaCount() {
        const listeners = Object.values(this.listenerMap);
        const moyamoyaCount = listeners.filter(x => x.IsMoyaMoya).length
        return moyamoyaCount
    }

}