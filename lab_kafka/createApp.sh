docker build -t service3:0.1 -f services/service1/Dockerfile .
kubectl apply -f services/service1/k8s/client/service1-service.yaml
kubectl apply -f services/service1/k8s/client/service1-deployment.yaml
kubectl patch svc service3-service --type='json' -p '[{"op":"replace","path":"/spec/type","value":"NodePort"}]'
kubectl apply -f services/service1/k8s/ingress.yaml
