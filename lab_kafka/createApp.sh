docker build -t service3:0.1 -f services/service1/Dockerfile .
kubectl apply -f services/service1/k8s/ingress.yaml
