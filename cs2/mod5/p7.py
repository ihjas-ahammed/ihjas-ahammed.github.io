# Exp 7: k-Means Clustering

from sklearn.cluster import KMeans
from sklearn.datasets import make_blobs

from sklearn.metrics import silhouette_score

X,y = make_blobs(n_samples=400, centers=3, cluster_std=1,random_state=42)
print("A database with 3 clusters is synthasized")

k=3
km = KMeans(n_clusters=k,init='k-means++',max_iter=50, n_init=200, random_state=45) ## valuess
y_kmeans = km.fit_predict(X)


score = silhouette_score(X,y_kmeans) # Record
print(score)